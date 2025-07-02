import React, { useMemo } from 'react';
import { View, Text, Image, TouchableOpacity, ImageStyle } from 'react-native';
import { colors, fonts } from '../../../theme';
import type { IconProps } from './Icon.types';

const iconMap = {
  mail: require('../../../../assets/images/icons/mail.png'),
  lock: require('../../../../assets/images/icons/lock.png'),
  unlock: require('../../../../assets/images/icons/unlock.png'),
  back: require('../../../../assets/images/icons/back.png'),
  user: require('../../../../assets/images/icons/user.png'),
  wallet: require('../../../../assets/images/icons/wallet.png'),
  distance: require('../../../../assets/images/icons/distance.png'),
  box: require('../../../../assets/images/icons/box.png'),
  search: require('../../../../assets/images/icons/search.png'),
  close: require('../../../../assets/images/icons/close.png'),
  warning: require('../../../../assets/images/icons/warning.png'),
};

export const Icon: React.FC<IconProps> = React.memo(
  ({ name, size = 24, color = colors.text.primary, style, onPress }) => {
    const renderIcon = useMemo(() => {
      if (name in iconMap) {
        return (
          <Image
            source={iconMap[name as keyof typeof iconMap]}
            style={[
              {
                width: size,
                height: size,
                tintColor: color,
              },
              style as ImageStyle,
            ]}
            resizeMode="contain"
          />
        );
      }

      switch (name) {
        case 'back':
          return (
            <Text
              style={[
                {
                  fontSize: size,
                  color,
                  fontWeight: fonts.weight.bold,
                },
                style,
              ]}
            >
              ←
            </Text>
          );
        case 'search':
          return (
            <Text
              style={[
                {
                  fontSize: size,
                  color,
                },
                style,
              ]}
            >
              🔍
            </Text>
          );
        case 'departure':
          return (
            <View
              style={[
                {
                  width: size,
                  height: size,
                  borderRadius: size / 2,
                  backgroundColor: color || colors.primary[500],
                },
                style,
              ]}
            />
          );
        case 'arrival':
          return (
            <View
              style={[
                {
                  width: size,
                  height: size,
                  borderRadius: size / 2,
                  backgroundColor: 'transparent',
                  borderWidth: 2,
                  borderColor: color || colors.primary[500],
                },
                style,
              ]}
            />
          );
        default:
          return null;
      }
    }, [name, size, color, style]);

    if (onPress) {
      return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
          {renderIcon}
        </TouchableOpacity>
      );
    }

    return <View>{renderIcon}</View>;
  },
);
