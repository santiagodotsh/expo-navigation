import { Drawer } from 'expo-router/drawer'
import { Ionicons } from '@expo/vector-icons'
import { CustomDrawer } from '@/components/shared/custom-drawer'

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: 'rgba(0, 0, 0, 0.4)',
        drawerActiveTintColor: 'indigo',
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Drawer.Screen
        name='(tabs)'
        options={{
          headerShown: false,
          drawerLabel: 'Tabs Stack',
          title: 'Tabs Stack Screen',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name='file-tray-stacked-outline'
              size={size}
              color={color}
            />
          )
        }}
      />
      <Drawer.Screen
        name='schedule/index'
        options={{
          drawerLabel: 'Schedule',
          title: 'Schedule Screen',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name='calendar-outline'
              size={size}
              color={color}
            />
          )
        }}
      />
      <Drawer.Screen
        name='user/index'
        options={{
          drawerLabel: 'User',
          title: 'User Screen',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name='person-outline'
              size={size}
              color={color}
            />
          )
        }}
      />
    </Drawer>
  )
}
