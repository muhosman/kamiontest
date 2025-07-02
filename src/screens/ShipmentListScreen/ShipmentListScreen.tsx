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

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const searchRequestRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      if (searchRequestRef.current) {
        searchRequestRef.current.abort();
      }
    };
  }, []);

  useEffect(() => {
    dispatch(fetchShipmentsAsync() as any);
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading) {
      setSearchLoading(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (searchRequestRef.current) {
      searchRequestRef.current.abort();
      searchRequestRef.current = null;
    }

    if (debouncedSearchQuery.trim() && isSearching) {
      setSearchLoading(true);

      searchRequestRef.current = dispatch(
        searchShipmentsAsync(debouncedSearchQuery.trim()) as any,
      );

      searchRequestRef.current.finally(() => {
        searchRequestRef.current = null;
        setSearchLoading(false);
      });
    } else if (!isSearching) {
      setIsSearching(false);
      setSearchLoading(false);
      dispatch(fetchShipmentsAsync() as any);
    }
  }, [debouncedSearchQuery, dispatch, isSearching]);

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

  const handleSearchQueryChange = useCallback(
    (query: string) => {
      if (searchRequestRef.current) {
        searchRequestRef.current.abort();
        searchRequestRef.current = null;
      }

      setSearchQuery(query);

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

  const handleErrorClose = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Header title="Yükler" showBackButton onBackPress={handleBackPress} />

      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Arayın.."
          value={searchQuery}
          onChangeText={handleSearchQueryChange}
          isLoading={searchLoading}
        />
      </View>

      <ShipmentList
        shipments={shipments || []}
        isLoading={isLoading}
        refreshing={refreshing || isLoading}
        searchQuery={searchQuery}
        onRefresh={handleRefresh}
        onShipmentPress={handleShipmentPress}
      />

      <ErrorBox
        message={error || ''}
        visible={!!error}
        onClose={handleErrorClose}
      />
    </View>
  );
};
