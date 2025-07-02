import React, { useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import { ShipmentDetailScreenProps } from '../../types/navigation.types';
import { Text } from '../../components/atoms';
import { Header } from '../../components/molecules';
import {
  formatDate,
  formatCurrency,
  getStatusColor,
  getStatusText,
} from '../../utils/helpers';
import { styles } from './ShipmentDetailScreen.styles';

export const ShipmentDetailScreen: React.FC<ShipmentDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const { shipment } = route.params;

  console.log('');
  console.log('='.repeat(50));
  console.log('📦 SHIPMENT DETAIL SCREEN BAŞLATILDI');
  console.log('='.repeat(50));
  console.log('📅 Zaman:', new Date().toLocaleString('tr-TR'));
  console.log('🆔 Shipment ID:', shipment.id);
  console.log('📦 Shipment Data:', shipment);
  console.log('');

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const statusColor = getStatusColor(shipment.status);
  const statusText = getStatusText(shipment.status);

  return (
    <View style={styles.container}>
      <Header
        title={`SEFER NO : ${shipment.id}`}
        showBackButton
        onBackPress={handleBackPress}
      />

      <ScrollView style={styles.content}>
        {/* Shipment Header */}
        <View style={styles.detailCard}>
          <View style={styles.shipmentHeader}>
            <Text style={styles.shipmentId}>#{shipment.id}</Text>
            <Text style={styles.shipmentCode}>{shipment.code}</Text>

            <View
              style={[
                styles.statusBadge,
                { backgroundColor: `${statusColor}20` },
              ]}
            >
              <Text style={[styles.statusText, { color: statusColor }] as any}>
                {statusText}
              </Text>
            </View>
          </View>

          {/* Temel Bilgiler */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Tarih:</Text>
            <Text style={styles.infoValue}>
              {formatDate(shipment.pick_up_date.toString())}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Saat:</Text>
            <Text style={styles.infoValue}>
              {shipment.time_interval?.start} - {shipment.time_interval?.end}
            </Text>
          </View>

          {shipment.customer_order_number && (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Müşteri Sipariş No:</Text>
              <Text style={styles.infoValue}>
                {shipment.customer_order_number}
              </Text>
            </View>
          )}
        </View>

        {/* Adres Bilgileri */}
        <Text style={styles.sectionTitle}>Adres Bilgileri</Text>

        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>
            🔵 ÇIKIŞ - {shipment.departure_address.name}
          </Text>
          <Text style={styles.addressText}>
            {shipment.departure_address.city.name}
            {shipment.departure_address.district &&
              `, ${shipment.departure_address.district.name}`}
          </Text>
          <Text style={styles.addressText}>
            {shipment.departure_address.address}
          </Text>
          <Text style={styles.addressText}>
            Sorumlu: {shipment.departure_address.responsible} -{' '}
            {shipment.departure_address.responsible_phone}
          </Text>
        </View>

        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>
            🔴 VARIŞ - {shipment.delivery_address.name}
          </Text>
          <Text style={styles.addressText}>
            {shipment.delivery_address.city.name}
            {shipment.delivery_address.district &&
              `, ${shipment.delivery_address.district.name}`}
          </Text>
          <Text style={styles.addressText}>
            {shipment.delivery_address.address}
          </Text>
          <Text style={styles.addressText}>
            Sorumlu: {shipment.delivery_address.responsible} -{' '}
            {shipment.delivery_address.responsible_phone}
          </Text>
        </View>

        {/* Yük Bilgileri */}
        <Text style={styles.sectionTitle}>Taşıma Gereksinimleri</Text>
        <View style={styles.detailCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>ARAÇ:</Text>
            <Text style={styles.infoValue}>
              {shipment.shipment_detail.tonnage.min} -{' '}
              {shipment.shipment_detail.tonnage.max} Ton
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>DORSE:</Text>
            <Text style={styles.infoValue}>
              {shipment.shipment_detail.base_type_value}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>TONAJ:</Text>
            <Text style={styles.infoValue}>
              {shipment.shipment_detail.tonnage.min}-
              {shipment.shipment_detail.tonnage.max} Ton Max.
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>ÜRÜN TİPİ:</Text>
            <Text style={styles.infoValue}>
              {shipment.shipment_detail.type_of_goods}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>YÜKLEME TİPİ:</Text>
            <Text style={styles.infoValue}>
              {shipment.shipment_detail.way_of_loading_value}
            </Text>
          </View>
        </View>

        {/* Gönderen Bilgileri */}
        {shipment.creator && (
          <>
            <Text style={styles.sectionTitle}>Gönderen Bilgileri</Text>
            <View style={styles.detailCard}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>İsim:</Text>
                <Text style={styles.infoValue}>
                  {shipment.creator.name} {shipment.creator.surname}
                </Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Telefon:</Text>
                <Text style={styles.infoValue}>{shipment.creator.phone}</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>E-posta:</Text>
                <Text style={styles.infoValue}>{shipment.creator.email}</Text>
              </View>
            </View>
          </>
        )}

        {/* Fiyat Bilgileri */}
        {shipment.price?.shipper && (
          <>
            <Text style={styles.sectionTitle}>Fiyat Bilgileri</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.priceLabel}>KAZANCINIZ</Text>
              <Text style={styles.priceValue}>
                {formatCurrency(Number(shipment.price.shipper.freight_price))} +
                KDV
              </Text>
            </View>
          </>
        )}

        {/* Taşıma Durumu */}
        {shipment.latest_status && (
          <>
            <Text style={styles.sectionTitle}>Durum</Text>
            <View style={styles.detailCard}>
              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: '#10b981', alignSelf: 'center' },
                ]}
              >
                <Text style={[styles.statusText, { color: 'white' }] as any}>
                  Taşıma Durumu : Tamamlandı
                </Text>
              </View>
            </View>
          </>
        )}

        {/* Alt boşluk */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
};
