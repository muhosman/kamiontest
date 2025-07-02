import React, { useEffect, useState, useCallback, useRef } from 'react';
import { View, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  fetchShipmentsAsync,
  searchShipmentsAsync,
  clearError,
} from '../../store/slices/shipmentSlice';
import { logout } from '../../store/slices/authSlice';
import { ShipmentListScreenProps } from '../../types/navigation.types';
import { Shipment } from '../../types/shipment.types';
import { ErrorBox } from '../../components/atoms';
import { Header, SearchBar } from '../../components/molecules';
import { ShipmentList } from '../../components/organisms';
import { useDebounce } from '../../hooks';
import { styles } from './ShipmentListScreen.styles';

export const ShipmentListScreen: React.FC<ShipmentListScreenProps> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const { shipments, isLoading, error } = useSelector(
    (state: RootState) => state.shipments,
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  // 500ms debounce - sadece bu kullanılacak
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // Arama isteklerini iptal etmek için dispatch promise ref'i
  const searchRequestRef = useRef<any>(null);

  // Component unmount cleanup
  useEffect(() => {
    return () => {
      if (searchRequestRef.current) {
        searchRequestRef.current.abort();
      }
    };
  }, []);

  // İlk yüklemede sevkiyatları getir
  useEffect(() => {
    dispatch(fetchShipmentsAsync() as any);
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading) {
      setSearchLoading(false);
    }
  }, [isLoading]);

  // Sadece debounced search - tek API çağrısı
  useEffect(() => {
    // Önceki arama isteğini iptal et
    if (searchRequestRef.current) {
      searchRequestRef.current.abort();
      searchRequestRef.current = null;
    }

    if (debouncedSearchQuery.trim() && isSearching) {
      setSearchLoading(true);

      // Yeni search request'i başlat
      searchRequestRef.current = dispatch(
        searchShipmentsAsync(debouncedSearchQuery.trim()) as any,
      );

      searchRequestRef.current.finally(() => {
        // İstek tamamlandığında loading'i kapat ve ref'i temizle
        searchRequestRef.current = null;
        setSearchLoading(false);
      });
    } else if (!isSearching) {
      // Arama temizlendiğinde tüm listeyi yeniden getir
      setIsSearching(false);
      setSearchLoading(false);
      dispatch(fetchShipmentsAsync() as any);
    }
  }, [debouncedSearchQuery, dispatch, isSearching]);

  // 🚀 PERFORMANCE: Memoized handler functions
  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      if (searchQuery.trim()) {
        await dispatch(searchShipmentsAsync(searchQuery.trim()) as any);
      } else {
        await dispatch(fetchShipmentsAsync() as any);
      }
    } catch (error) {
      console.error('❌ Yenileme hatası:', error);
      Alert.alert('Hata', 'Sevkiyatlar yenilenirken bir hata oluştu');
    } finally {
      setRefreshing(false);
    }
  }, [dispatch, searchQuery]);

  const handleShipmentPress = useCallback(
    (shipment: Shipment) => {
      navigation.navigate('ShipmentDetail', {
        shipment: shipment,
      });
    },
    [navigation],
  );

  const handleBackPress = useCallback(() => {
    console.log('🚫 Logout işlemi başlatılıyor');
    dispatch(logout());
  }, [dispatch]);

  // Search query değişimi - önceki isteği iptal et ve loading başlat
  const handleSearchQueryChange = useCallback(
    (query: string) => {
      // Önceki arama isteğini hemen iptal et
      if (searchRequestRef.current) {
        searchRequestRef.current.abort();
        searchRequestRef.current = null;
      }

      setSearchQuery(query);

      // Arama başladığında hemen loading göster
      if (query.trim()) {
        setIsSearching(true);
        setSearchLoading(true);
      } else {
        setSearchLoading(false);
        setIsSearching(false);
        handleRefresh();
      }
    },
    [handleRefresh],
  );

  // Error handling callback
  const handleErrorClose = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

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
          isLoading={searchLoading}
        />
      </View>

      {/* Shipment List with Skeleton Loading */}
      <ShipmentList
        shipments={shipments || []}
        isLoading={isLoading}
        refreshing={refreshing || isLoading}
        searchQuery={searchQuery}
        onRefresh={handleRefresh}
        onShipmentPress={handleShipmentPress}
      />

      {/* Error Message */}
      <ErrorBox
        message={error || ''}
        visible={!!error}
        onClose={handleErrorClose}
      />
    </View>
  );
};
