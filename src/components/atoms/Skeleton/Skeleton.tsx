import React, { useEffect, useRef } from 'react';
import { Animated, ViewStyle } from 'react-native';
import { colors } from '../../../theme';
import type { SkeletonProps } from './Skeleton.types';

export const Skeleton: React.FC<SkeletonProps> = React.memo(
  ({
    width = '100%',
    height = 20,
    borderRadius = 4,
    style,
    animate = true,
  }) => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      if (animate) {
        const startAnimation = () => {
          Animated.loop(
            Animated.sequence([
              Animated.timing(animatedValue, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
              }),
              Animated.timing(animatedValue, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
              }),
            ]),
          ).start();
        };

        startAnimation();
      }
    }, [animatedValue, animate]);

    const backgroundColor = animate
      ? animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [colors.neutral[200], colors.neutral[300]],
        })
      : colors.neutral[200];

    const baseStyle: ViewStyle = {
      width: width as any,
      height,
      borderRadius,
    };

    return <Animated.View style={[baseStyle, { backgroundColor }, style]} />;
  },
);
