import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { View, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  fetchShipmentsAsync,
  searchShipmentsAsync,
  clearError,
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

  useEffect(() => {
    console.log('📦 State Güncellendi:');
    console.log('🔍 Shipments:', shipments);
    console.log('- Search Query:', searchQuery);
    console.log('- Is Loading:', isLoading);
    console.log('- Search Loading:', searchLoading);
    console.log('- Is Searching:', isSearching);
    console.log('- Refreshing:', refreshing);
    console.log('- Error:', error);
  }, [searchQuery, isLoading, searchLoading, isSearching, refreshing, error]);

  // Component unmount cleanup
  useEffect(() => {
    return () => {
      if (searchRequestRef.current) {
        console.log('🧹 Component unmount: Arama isteği iptal ediliyor...');
        searchRequestRef.current.abort();
      }
    };
  }, []);

  // İlk yüklemede sevkiyatları getir
  useEffect(() => {
    console.log('🚛 ShipmentListScreen: İlk yükleme başlatılıyor...');
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
      console.log('🚫 Önceki arama isteği iptal ediliyor...');
      searchRequestRef.current.abort();
      searchRequestRef.current = null;
    }

    if (debouncedSearchQuery.trim()) {
      console.log(
        '🔍 Debounced arama başlatılıyor:',
        debouncedSearchQuery.trim(),
      );
      setSearchLoading(true);

      // Yeni search request'i başlat
      searchRequestRef.current = dispatch(
        searchShipmentsAsync(debouncedSearchQuery.trim()) as any,
      );

      searchRequestRef.current.finally(() => {
        // İstek tamamlandığında loading'i kapat ve ref'i temizle
        searchRequestRef.current = null;
      });
    } else if (isSearching) {
      // Arama temizlendiğinde tüm listeyi yeniden getir
      console.log('🔍 Arama temizlendi, tüm liste getiriliyor');
      setIsSearching(false);
      setSearchLoading(false);
      dispatch(fetchShipmentsAsync() as any);
    }
  }, [debouncedSearchQuery]);

  // 🚀 PERFORMANCE: Memoized handler functions
  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      if (searchQuery.trim()) {
        console.log(
          '🔄 Arama ile yenileme API çağrısı başlatılıyor...',
          searchQuery,
        );
        await dispatch(searchShipmentsAsync(searchQuery.trim()) as any);
        console.log('✅ Arama ile yenileme başarılı...');
      } else {
        console.log('🔄 Normal yenileme API çağrısı başlatılıyor...');
        await dispatch(fetchShipmentsAsync() as any);
        console.log('✅ Normal yenileme başarılı...');
      }
    } catch (error) {
      console.error('❌ Yenileme hatası:', error);
      Alert.alert('Hata', 'Sevkiyatlar yenilenirken bir hata oluştu');
    } finally {
      console.log('🔄 Pull-to-refresh tamamlandı');
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
    navigation.goBack();
  }, [navigation]);

  // Search query değişimi - önceki isteği iptal et ve loading başlat
  const handleSearchQueryChange = useCallback(
    (query: string) => {
      console.log('🔍 Search query değişti:', query);
      console.log(
        '🔍 Search query searchRequestRef:',
        searchRequestRef.current,
      );
      // Önceki arama isteğini hemen iptal et
      if (searchRequestRef.current) {
        console.log('🚫 Query değişti, önceki arama iptal ediliyor...');
        searchRequestRef.current.abort();
        searchRequestRef.current = null;
      }

      setSearchQuery(query);

      // Arama başladığında hemen loading göster
      if (query.trim()) {
        setSearchLoading(true);
      } else {
        setSearchLoading(false);
        setIsSearching(false);
        console.log('🔄 Normal yenileme API çağrısı başlatılıyor...');
        handleRefresh();
      }
    },
    [handleRefresh],
  );

  // 🚀 PERFORMANCE: Memoized error component
  const errorComponent = useMemo(() => {
    if (!error) return null;

    return (
      <View style={styles.errorBanner}>
        {/* Error Icon */}
        <View style={styles.errorIconCircle}>
          <Text style={styles.errorSlash}>⊘</Text>
        </View>

        {/* Error Text */}
        <Text style={styles.errorBannerText}>Error: {error}</Text>

        {/* Close Button */}
        <Button
          title="X"
          variant="ghost"
          size="large"
          textStyle={styles.closeButtonText}
          onPress={() => {
            dispatch(clearError());
          }}
          style={styles.closeButton}
        />
      </View>
    );
  }, [error, dispatch]);

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
          isLoading={searchLoading || isLoading}
        />
      </View>

      {/* Shipment List with Skeleton Loading */}
      <ShipmentList
        shipments={shipments || []}
        isLoading={isLoading || searchLoading}
        refreshing={refreshing || isLoading || searchLoading}
        searchQuery={searchQuery}
        onRefresh={handleRefresh}
        onShipmentPress={handleShipmentPress}
      />

      {/* Error Message */}
      {errorComponent}
    </View>
  );
};
