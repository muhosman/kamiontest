import React from 'react';
import { View, RefreshControl } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Text } from '../../atoms';
import { ShipmentCard, ShipmentCardSkeleton } from '../../molecules';
import { colors } from '../../../theme';
import { styles } from './ShipmentList.styles';
import type { ShipmentListProps } from './ShipmentList.types';
import type { Shipment } from '../../../types/shipment.types';

export const ShipmentList: React.FC<ShipmentListProps> = ({
  shipments,
  isLoading = false,
  refreshing = false,
  searchQuery = '',
  onRefresh,
  onShipmentPress,
  style,
}) => {
  const renderShipmentItem = ({ item }: { item: Shipment }) => (
    <ShipmentCard shipment={item} onPress={onShipmentPress} />
  );

  const renderSkeletonItem = ({ index }: { index: number }) => (
    <ShipmentCardSkeleton key={`skeleton-${index}`} />
  );

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>
        {searchQuery ? 'Arama sonucu bulunamadı' : 'Henüz sevkiyat yok'}
      </Text>
      <Text style={styles.emptySubtitle}>
        {searchQuery
          ? 'Farklı bir ID ile arama yapmayı deneyin'
          : 'Yeni sevkiyatlar eklendiğinde burada görünecek'}
      </Text>
    </View>
  );

  // Loading durumunda skeleton data'sı oluştur
  const skeletonData =
    isLoading || refreshing
      ? Array.from({ length: 5 }, (_, index) => ({ id: index }))
      : [];

  // İlk yükleme sırasında skeleton'ları göster
  if (isLoading && shipments.length === 0) {
    return (
      <FlashList
        data={skeletonData}
        renderItem={renderSkeletonItem}
        keyExtractor={item => `skeleton-${item.id}`}
        estimatedItemSize={140}
        style={[styles.list, style]}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    );
  }

  // Refresh sırasında skeleton'ları göster
  if (refreshing) {
    return (
      <FlashList
        data={skeletonData}
        renderItem={renderSkeletonItem}
        keyExtractor={item => `refresh-skeleton-${item.id}`}
        estimatedItemSize={140}
        style={[styles.list, style]}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      />
    );
  }

  return (
    <FlashList
      data={shipments}
      renderItem={renderShipmentItem}
      keyExtractor={item => item.id.toString()}
      estimatedItemSize={140}
      style={[styles.list, style]}
      contentContainerStyle={styles.listContent}
      refreshControl={
        onRefresh ? (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.primary[500]]}
          />
        ) : undefined
      }
      ListEmptyComponent={!isLoading ? renderEmptyComponent : null}
      showsVerticalScrollIndicator={false}
    />
  );
};
