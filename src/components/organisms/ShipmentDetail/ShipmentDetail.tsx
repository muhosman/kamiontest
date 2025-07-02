import React, { useMemo } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text, Divider } from '../../atoms';
import {
  MapView,
  RouteCard,
  DriverCard,
  CompanyCard,
  ShipmentRequirements,
} from '../../molecules';
import { ShipmentDetailProps } from './ShipmentDetail.types';
import { styles } from './ShipmentDetail.styles';
import { formatDate } from '../../../utils/helpers';
import { colors } from '../../../theme';

export const ShipmentDetail: React.FC<ShipmentDetailProps> = React.memo(
  ({ shipment, onGetDirections, onCallDriver }) => {
    const departureSteps = useMemo(
      () => [
        {
          step: 1,
          location: shipment.departure_address.name || 'Çıkış',
          city: shipment.departure_address.city.name || 'Şehir',
        },
        {
          step: 2,
          location: shipment.departure_address.district?.name || 'Merkez',
          city: shipment.departure_address.city.name || 'Şehir',
        },
        {
          step: 3,
          location: 'Çıkış Noktası',
          city: shipment.departure_address.city.name || 'Şehir',
        },
      ],
      [
        shipment.departure_address.name,
        shipment.departure_address.city.name,
        shipment.departure_address.district?.name,
      ],
    );

    const formattedDate = useMemo(
      () => formatDate(shipment.pick_up_date),
      [shipment.pick_up_date],
    );

    const tonnageText = useMemo(
      () =>
        `${shipment.shipment_detail.tonnage.min}.${shipment.shipment_detail.tonnage.max}0 TIR`,
      [
        shipment.shipment_detail.tonnage.min,
        shipment.shipment_detail.tonnage.max,
      ],
    );

    const tonnageRange = useMemo(
      () =>
        `${shipment.shipment_detail.tonnage.min}-${shipment.shipment_detail.tonnage.max} Ton Max.`,
      [
        shipment.shipment_detail.tonnage.min,
        shipment.shipment_detail.tonnage.max,
      ],
    );
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerCard}>
          <Text variant="h5" color={colors.text.primary}>
            Güzargah
          </Text>
          <View style={styles.dateTimeContainer}>
            <Image
              source={require('../../../../assets/images/icons/time.png')}
              style={styles.timeIcon}
            />
            <Text
              variant="body2"
              color={colors.text.primary}
              style={styles.dateText}
            >
              {formattedDate}
            </Text>
            <Text
              variant="body2"
              color={colors.text.primary}
              style={styles.timeText}
            >
              / {shipment.time_interval?.start || '12:00'}-
              {shipment.time_interval?.end || '16:00'}
            </Text>
          </View>
        </View>

        <MapView onGetDirections={onGetDirections || (() => {})} />

        {shipment.departure_address && shipment.delivery_address && (
          <>
            <RouteCard
              departureSteps={departureSteps}
              departureCity={shipment.departure_address.city.name || ''}
              departureDistrict={
                shipment.departure_address.district?.name || ''
              }
              arrivalDistrict={shipment.delivery_address.district?.name || ''}
              arrivalCity={shipment.delivery_address.city.name || ''}
            />
            <Divider />
          </>
        )}

        {shipment.creator && (
          <>
            <DriverCard
              name={shipment.creator?.name || 'Bilinmiyor'}
              phone={shipment.creator?.phone || 'Bilinmiyor'}
              amount={Number(shipment.price) || 'Bilinmiyor'}
              currency="TRY"
              onCallPress={onCallDriver}
            />
            <Divider />
          </>
        )}
        {shipment.shipper && (
          <>
            <CompanyCard
              name={shipment.shipper?.name || 'Bilinmiyor'}
              icon="📦"
            />
            <Divider />
          </>
        )}
        {shipment.shipment_detail && (
          <ShipmentRequirements
            vehicle={tonnageText}
            trailerType={shipment.shipment_detail.base_type_value}
            tonnage={tonnageRange}
            goodsType={shipment.shipment_detail.type_of_goods}
            loadingType={shipment.shipment_detail.way_of_loading_value}
            status={`Taşıma Durumu : ${shipment.latest_status.type_value}`}
          />
        )}
      </ScrollView>
    );
  },
);
