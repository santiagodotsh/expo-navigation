import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'indigo' }}>
      <Tabs.Screen
        name='(stack)'
        options={{
          title: 'Stack Screen',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name='file-tray-stacked-outline'
              size={size}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name='home/index'
        options={{
          title: 'Home Screen',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name='home-outline'
              size={size}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name='favorites/index'
        options={{
          title: 'Favorites Screen',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name='star-outline'
              size={size}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  )
}
