import React, { useCallback } from 'react';
import { View, Linking, Alert } from 'react-native';
import { ShipmentDetailScreenProps } from '../../types/navigation.types';
import { Header } from '../../components/molecules';
import { ShipmentDetail } from '../../components/organisms';
import { styles } from './ShipmentDetailScreen.styles';

export const ShipmentDetailScreen: React.FC<ShipmentDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const { shipment } = route.params;

  console.log('');
  console.log('='.repeat(50));
  console.log('📱 SHIPMENT DETAIL SCREEN BAŞLATILDI');
  console.log('='.repeat(50));
  console.log('📅 Zaman:', new Date().toLocaleString('tr-TR'));
  console.log('🆔 Shipment ID:', shipment.id);
  console.log('');

  const handleBackPress = useCallback(() => {
    console.log('🔙 Geri butonuna basıldı');
    navigation.goBack();
  }, [navigation]);

  const handleGetDirections = useCallback(() => {
    console.log('🗺️ Yol tarifi alma işlemi başlatıldı');
    // Google Maps ile yol tarifi alma
    const departureCoords = '41.0082,28.9784'; // Örnek koordinatlar
    const arrivalCoords = '41.0082,28.9784'; // Örnek koordinatlar
    const url = `https://www.google.com/maps/dir/${departureCoords}/${arrivalCoords}`;

    Linking.openURL(url).catch(() => {
      Alert.alert('Hata', 'Harita uygulaması açılamadı');
    });
  }, []);

  const handleCallDriver = useCallback(() => {
    console.log('📞 Sürücü arama işlemi başlatıldı');
    const phoneNumber = shipment.creator?.phone || '';
    if (phoneNumber) {
      console.log('📞 Aranacak numara:', phoneNumber);
      Linking.openURL(`tel:${phoneNumber}`);
    } else {
      console.log('❌ Telefon numarası bulunamadı');
    }
  }, [shipment.creator?.phone]);

  return (
    <View style={styles.container}>
      <Header
        title={`SEFER NO : ${shipment.id}`}
        showBackButton
        onBackPress={handleBackPress}
      />

      <View style={styles.content}>
        <ShipmentDetail
          shipment={shipment}
          onGetDirections={handleGetDirections}
          onCallDriver={handleCallDriver}
        />
      </View>
    </View>
  );
};
