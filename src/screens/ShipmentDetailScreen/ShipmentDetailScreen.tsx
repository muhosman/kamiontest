import React, { useCallback } from 'react';
import { View, Linking, Alert } from 'react-native';
import { ShipmentDetailScreenProps } from '../../types/navigation.types';
import { Header } from '../../components/molecules';
import { ShipmentDetail } from '../../components/organisms';
import { styles } from './ShipmentDetailScreen.styles';

export const ShipmentDetailScreen: React.FC<ShipmentDetailScreenProps> =
  React.memo(({ navigation, route }) => {
    const { shipment } = route.params;

    const handleBackPress = useCallback(() => {
      navigation.goBack();
    }, [navigation]);

    const handleGetDirections = useCallback(() => {
      const departureCoords = '41.0082,28.9784';
      const arrivalCoords = '41.0082,28.9784';
      const url = `https://www.google.com/maps/dir/${departureCoords}/${arrivalCoords}`;

      Linking.openURL(url).catch(() => {
        Alert.alert('Hata', 'Harita uygulaması açılamadı');
      });
    }, []);

    const handleCallDriver = useCallback(() => {
      const phoneNumber = shipment.creator?.phone || '';
      if (phoneNumber) {
        Linking.openURL(`tel:${phoneNumber}`);
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
  });
