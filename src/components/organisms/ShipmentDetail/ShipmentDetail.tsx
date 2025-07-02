import React from 'react';
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

export const ShipmentDetail: React.FC<ShipmentDetailProps> = ({
  shipment,
  onGetDirections,
  onCallDriver,
}) => {
  console.log('📦 SHIPMENT DETAIL ORGANISM RENDERED');
  console.log('🆔 Shipment ID:', shipment);

  // Kalkış durakları için veri hazırlama
  const departureSteps = [
    {
      step: 1,
      location: shipment.departure_address.name || 'Çıkış',
      city: shipment.departure_address.city.name,
    },
    {
      step: 2,
      location: shipment.departure_address.district?.name || 'Merkez',
      city: shipment.departure_address.city.name,
    },
    {
      step: 3,
      location: 'Çıkış Noktası',
      city: shipment.departure_address.city.name,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Başlık ve Tarih */}
      <View style={styles.headerCard}>
        <Text style={styles.routeTitle}>Güzargah</Text>
        <View style={styles.dateTimeContainer}>
          <Image
            source={require('../../../../assets/images/icons/time.png')}
            style={styles.timeIcon}
          />
          <Text style={styles.dateText}>
            {formatDate(shipment.pick_up_date)}
          </Text>
          <Text style={styles.timeText}>
            / {shipment.time_interval?.start || '12:00'}-
            {shipment.time_interval?.end || '16:00'}
          </Text>
        </View>
      </View>

      {/* Harita */}
      <MapView onGetDirections={onGetDirections || (() => {})} />

      {/* Kalkış/Varış Bilgileri */}
      <RouteCard
        departureSteps={departureSteps}
        departureCity={shipment.departure_address.city.name}
        departureDistrict={shipment.departure_address.district?.name || ''}
        arrivalDistrict={shipment.delivery_address.district?.name || ''}
        arrivalCity={shipment.delivery_address.city.name}
      />

      <Divider />

      {/* Sürücü Bilgileri */}
      {shipment.creator && (
        <>
          <DriverCard
            name={shipment.creator.name}
            phone={shipment.creator.phone}
            amount={Number(shipment.price) || 12400}
            currency="TRY"
            onCallPress={onCallDriver}
          />
          <Divider />
        </>
      )}

      {/* Şirket Bilgileri - Sabit örnek */}
      <CompanyCard name="Gürok Turizm ve Madencilik Anonim Şirketi" icon="📦" />

      <Divider />

      {/* Taşıma Gereksinimleri */}
      <ShipmentRequirements
        vehicle={`${shipment.shipment_detail.tonnage.min}.${shipment.shipment_detail.tonnage.max}0 TIR`}
        trailerType={shipment.shipment_detail.base_type_value}
        tonnage={`${shipment.shipment_detail.tonnage.min}-${shipment.shipment_detail.tonnage.max} Ton Max.`}
        goodsType={shipment.shipment_detail.type_of_goods}
        loadingType={shipment.shipment_detail.way_of_loading_value}
        status="Taşıma Durumu : Tamamlandı"
      />
    </ScrollView>
  );
};
