import React from 'react';
import { View } from 'react-native';
import { Skeleton } from '../../atoms';
import { styles } from './ShipmentCardSkeleton.styles';
import type { ShipmentCardSkeletonProps } from './ShipmentCardSkeleton.types';

export const ShipmentCardSkeleton: React.FC<ShipmentCardSkeletonProps> =
  React.memo(({ style }) => {
    return (
      <View style={[styles.container, style]}>
        {/* Header Skeleton */}
        <View style={styles.header}>
          {/* Shipment Number */}
          <Skeleton width={80} height={24} borderRadius={6} />

          {/* Date and Price */}
          <View style={styles.headerRight}>
            <Skeleton width={100} height={16} borderRadius={4} />
            <Skeleton width={80} height={18} borderRadius={4} />
          </View>
        </View>

        {/* Route Info Skeleton */}
        <View style={styles.routeContainer}>
          <View style={styles.routeInfo}>
            {/* Departure */}
            <View style={styles.routeItem}>
              <Skeleton width={12} height={12} borderRadius={6} />
              <Skeleton
                width={40}
                height={12}
                borderRadius={4}
                style={{ marginHorizontal: 8 }}
              />
              <Skeleton width="60%" height={14} borderRadius={4} />
            </View>

            {/* Dotted Line */}
            <Skeleton
              width={2}
              height={20}
              borderRadius={1}
              style={styles.dottedLine}
            />

            {/* Arrival */}
            <View style={styles.routeItem}>
              <Skeleton width={12} height={12} borderRadius={6} />
              <Skeleton
                width={40}
                height={12}
                borderRadius={4}
                style={{ marginHorizontal: 8 }}
              />
              <Skeleton width="55%" height={14} borderRadius={4} />
            </View>
          </View>

          {/* Stop Count */}
          <View style={styles.stopCountContainer}>
            <Skeleton width={60} height={16} borderRadius={8} />
          </View>
        </View>
      </View>
    );
  });
