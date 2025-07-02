import React from 'react';
import { View, Image } from 'react-native';
import { MapButton } from '../../atoms';
import { MapViewProps } from './MapView.types';
import { styles } from './MapView.styles';

export const MapView: React.FC<MapViewProps> = ({ onGetDirections }) => {
  return (
    <View style={styles.container}>
      {/* Basit harita placeholder - gerçek projede react-native-maps kullanılabilir */}
      <View style={styles.mapPlaceholder}>
        <View style={styles.routeOverlay} />
        <Image
          source={require('../../../../assets/images/map.jpg')}
          style={styles.mapImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.buttonContainer}>
        <MapButton onPress={onGetDirections} />
      </View>
    </View>
  );
};
