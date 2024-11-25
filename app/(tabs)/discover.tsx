import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const discover = () => {
  return (
    <View style={styles.container}>
      <Text>discover</Text>
    </View>
  );
};

export default discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
