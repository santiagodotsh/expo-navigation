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
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={28}
              name='file-tray-stacked-outline'
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name='home/index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={28}
              name='home-outline'
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name='favorites/index'
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={28}
              name='star-outline'
              color={color}
            />
          )
        }}
      />
    </Tabs>
  )
}
