import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { View, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  fetchShipmentsAsync,
  searchShipmentsAsync,
} from '../../store/slices/shipmentSlice';
import { ShipmentListScreenProps } from '../../types/navigation.types';
import { Shipment } from '../../types/shipment.types';
import { Button, Text } from '../../components/atoms';
import { Header, SearchBar } from '../../components/molecules';
import { ShipmentList } from '../../components/organisms';
import { useDebounce } from '../../hooks';
import { styles } from './ShipmentListScreen.styles';

export const ShipmentListScreen: React.FC<ShipmentListScreenProps> = ({
  navigation,
}) => {
  console.log('');
  console.log('='.repeat(50));
  console.log('🖥️ SHIPMENT LIST SCREEN BAŞLATILDI');
  console.log('='.repeat(50));
  console.log('📅 Zaman:', new Date().toLocaleString('tr-TR'));
  console.log('');

  const dispatch = useDispatch();
  const { shipments, isLoading, error } = useSelector(
    (state: RootState) => state.shipments,
  );

  // Redux state değişikliklerini logla
  useEffect(() => {
    console.log('📦 Shipments State Güncellendi:');
    console.log('- Sevkiyat sayısı:', shipments?.length);
    console.log('- Loading durumu:', isLoading);
    console.log('- Hata:', error);
    console.log('- Sevkiyat verileri:', shipments);
  }, [shipments, isLoading, error]);

  console.log('shipments', shipments);
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // 500ms debounce - sadece bu kullanılacak
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // Component unmount cleanup
  useEffect(() => {
    return () => {
      console.log('🖥️ ShipmentListScreen component unmount edildi');
    };
  }, []);

  // İlk yüklemede sevkiyatları getir
  useEffect(() => {
    console.log('🚛 ShipmentListScreen: İlk yükleme başlatılıyor...');
    console.log('📊 Parametre:', { page: 1, limit: 20 });
    dispatch(fetchShipmentsAsync({ page: 1, limit: 20 }) as any);
  }, [dispatch]);

  // Sadece debounced search - tek API çağrısı
  useEffect(() => {
    if (debouncedSearchQuery.trim()) {
      console.log(
        '🔍 Debounced arama başlatılıyor:',
        debouncedSearchQuery.trim(),
      );
      setSearchLoading(true);
      setIsSearching(true);

      dispatch(
        searchShipmentsAsync(debouncedSearchQuery.trim()) as any,
      ).finally(() => {
        setSearchLoading(false);
      });
    } else if (isSearching) {
      // Arama temizlendiğinde tüm listeyi yeniden getir
      console.log('🔍 Arama temizlendi, tüm liste getiriliyor');
      setIsSearching(false);
      dispatch(fetchShipmentsAsync({ page: 1, limit: 20 }) as any);
    }
  }, [debouncedSearchQuery, dispatch, isSearching]);

  // 🚀 PERFORMANCE: Memoized handler functions
  const handleRefresh = useCallback(async () => {
    console.log('🔄 Pull-to-refresh başlatıldı');
    setRefreshing(true);
    try {
      console.log('🔄 Yenileme API çağrısı başlatılıyor...');
      const result = await dispatch(
        fetchShipmentsAsync({ page: 1, limit: 20 }) as any,
      );
      console.log('✅ Yenileme başarılı:', result);
    } catch (error) {
      console.error('❌ Yenileme hatası:', error);
      Alert.alert('Hata', 'Sevkiyatlar yenilenirken bir hata oluştu');
    } finally {
      console.log('🔄 Pull-to-refresh tamamlandı');
      setRefreshing(false);
    }
  }, [dispatch]);

  const handleShipmentPress = useCallback(
    (shipment: Shipment) => {
      navigation.navigate('ShipmentDetail', {
        shipmentId: shipment.id.toString(),
      });
    },
    [navigation],
  );

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  // Sadece manuel arama (Enter tuşu ile)
  const handleSearch = useCallback(
    (query: string) => {
      console.log('🔍 Manuel arama (Enter) tetiklendi:', query);
      if (query.trim()) {
        console.log('🔍 Manuel arama başlatılıyor:', query.trim());
        setSearchLoading(true);
        setIsSearching(true);

        dispatch(searchShipmentsAsync(query.trim()) as any).finally(() => {
          setSearchLoading(false);
        });
      }
    },
    [dispatch],
  );

  // Search query değişimi - sadece state güncellemesi
  const handleSearchQueryChange = useCallback((query: string) => {
    console.log('🔍 Search query değişti:', query);
    setSearchQuery(query);
  }, []);

  // 🚀 PERFORMANCE: Memoized retry function
  const handleRetry = useCallback(() => {
    dispatch(fetchShipmentsAsync({ page: 1, limit: 20 }) as any);
  }, [dispatch]);

  // 🚀 PERFORMANCE: Memoized error component
  const errorComponent = useMemo(() => {
    if (!error) return null;

    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <Button
          title="Tekrar Dene"
          variant="outline"
          size="small"
          onPress={handleRetry}
        />
      </View>
    );
  }, [error, handleRetry]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Yükler" showBackButton onBackPress={handleBackPress} />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Arayın.."
          value={searchQuery}
          onChangeText={handleSearchQueryChange}
          onSearch={handleSearch}
          isLoading={searchLoading}
        />
      </View>

      {/* Shipment List with Skeleton Loading */}
      <ShipmentList
        shipments={shipments}
        isLoading={isLoading}
        refreshing={refreshing}
        searchQuery={searchQuery}
        onRefresh={handleRefresh}
        onShipmentPress={handleShipmentPress}
      />

      {/* Error Message */}
      {errorComponent}
    </View>
  );
};
