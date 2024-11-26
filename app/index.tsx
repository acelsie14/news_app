import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';

const WelcomePage = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/welcomeimage.jpg')}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={styles.wrapper}>
          <Animated.Text
            style={styles.title}
            entering={FadeInRight.delay(300).duration(1000)}
          >
            Stay Updated!
          </Animated.Text>
          <Animated.Text
            style={styles.description}
            entering={FadeInRight.delay(700).duration(1000)}
          >
            Get breaking news and personalized updates directly to your feed
          </Animated.Text>
          <Animated.View entering={FadeInDown.delay(1200).duration(1000)}>
            <TouchableOpacity
              onPress={() => router.replace('/(tabs)')}
              style={styles.btn}
            >
              <Text style={styles.btnText}>Get started</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
    paddingHorizontal: 30,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1.5,
    lineHeight: 36,
    textAlign: 'center',
  },
  description: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1.2,
    lineHeight: 22,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#d90b1f',
    paddingVertical: 15,
    marginVertical: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
  },
});
