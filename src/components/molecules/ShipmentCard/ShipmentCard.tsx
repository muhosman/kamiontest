import React, { useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '../../atoms';
import { LocationInfo } from '../LocationInfo';
import { styles } from './ShipmentCard.styles';
import type { ShipmentCardProps } from './ShipmentCard.types';

export const ShipmentCard: React.FC<ShipmentCardProps> = React.memo(
  ({ shipment, onPress, style }) => {
    // 🚀 PERFORMANCE: Memoized address calculations
    const addressInfo = useMemo(
      () => ({
        departureCity:
          shipment.departure_address?.city?.name || 'Bilinmeyen Şehir',
        departureDistrict:
          shipment.departure_address?.district?.name || 'Bilinmeyen İlçe',
        arrivalCity:
          shipment.delivery_address?.city?.name || 'Bilinmeyen Şehir',
        arrivalDistrict:
          shipment.delivery_address?.district?.name || 'Bilinmeyen İlçe',
      }),
      [
        shipment.departure_address?.city?.name,
        shipment.departure_address?.district?.name,
        shipment.delivery_address?.city?.name,
        shipment.delivery_address?.district?.name,
      ],
    );

    // 🚀 PERFORMANCE: Memoized date formatting
    const formattedDate = useMemo(() => {
      const formatDate = (timestamp: number) => {
        try {
          const date = new Date(timestamp * 1000);
          return date.toLocaleDateString('tr-TR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          });
        } catch {
          return 'Tarih belirtilmemiş';
        }
      };

      return formatDate(shipment.pick_up_date || shipment.created_at);
    }, [shipment.pick_up_date, shipment.created_at]);

    // 🚀 PERFORMANCE: Memoized price calculation
    const priceInfo = useMemo(() => {
      const shipperPrice = shipment.price?.shipper?.freight_price || '0';
      const priceNumber = parseFloat(shipperPrice);
      const currencyCode =
        shipment.price?.shipper?.price_details?.base_currency?.code;

      const currency =
        currencyCode === 'TRY'
          ? '₺'
          : currencyCode === 'EUR'
          ? '€'
          : currencyCode === 'USD'
          ? '$'
          : '₺';

      return {
        shipperPrice,
        priceNumber,
        currency,
        displayText:
          priceNumber > 0 ? `${shipperPrice} ` : 'Fiyat belirtilmemiş',
      };
    }, [
      shipment.price?.shipper?.freight_price,
      shipment.price?.shipper?.price_details?.base_currency?.code,
    ]);

    const handlePress = () => {
      onPress?.(shipment);
    };

    return (
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.shipmentNumber}>{shipment.id}</Text>
          <View style={styles.headerRight}>
            <View style={styles.headerRightDate}>
              <Text style={styles.dateText}>{formattedDate}</Text>
            </View>
            <View style={styles.headerRightPrice}>
              <Text style={styles.priceText}>{priceInfo.displayText}</Text>
              {priceInfo.priceNumber > 0 && (
                <Text style={styles.priceTextWithCurrency}>
                  {priceInfo.currency}+KDV
                </Text>
              )}
            </View>
          </View>
        </View>

        {/* Location Info */}
        <LocationInfo
          departureCity={addressInfo.departureCity}
          departureDistrict={addressInfo.departureDistrict}
          arrivalCity={addressInfo.arrivalCity}
          arrivalDistrict={addressInfo.arrivalDistrict}
          stopCount={1}
        />
      </TouchableOpacity>
    );
  },
);
