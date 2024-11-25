import React from 'react';
import { Tabs } from 'expo-router';
import TabBar from '@/components/TabBar';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ headerTitleAlign: 'center' }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="discover" options={{ title: 'Discover' }} />
      <Tabs.Screen name="saved" options={{ title: 'Saved' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  );
}
