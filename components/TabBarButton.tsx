// @ts-nocheck

// Entire file is ignored by TypeScript
import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { icons } from '@/assets/Icons';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type Props = {
  routeName: string;
  color: string;
  isFocused: boolean;
  label: string;
  onPress: () => void;
};

const TabBarButton = ({
  routeName,
  color,
  isFocused,
  label,
  onPress,
}: Props) => {
  const scale = useSharedValue(0);
  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused,
      { duration: 500 }
    );
  }, [isFocused, scale]);
  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
    const topValue = interpolate(scale.value, [0, 1], [0, 8]);
    return {
      transform: [{ scale: scaleValue }],
      top: topValue,
    };
  });
  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return {
      opacity: opacity,
    };
  });
  return (
    <Pressable style={styles.tabbaritem} onPress={onPress}>
      <Animated.View style={animatedIconStyle}>
        {icons[routeName]({
          color,
        })}
      </Animated.View>

      <Animated.Text
        style={[
          {
            color,
            fontSize: 11,
          },
          animatedTextStyle,
        ]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabbaritem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
});
