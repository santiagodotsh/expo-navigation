import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'indigo'
      }}
    >
      <Tabs.Screen
        name='(stack)'
        options={{
          title: 'Stack',
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
          title: 'Home',
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
          title: 'Favorites',
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
