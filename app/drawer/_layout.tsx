import { Drawer } from 'expo-router/drawer'

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name='user/index'
        options={{
          drawerLabel: 'User',
          title: 'User Screen'
        }}
      />
      <Drawer.Screen
        name='schedule/index'
        options={{
          drawerLabel: 'Schedule',
          title: 'Schedule Screen'
        }}
      />
    </Drawer>
  )
}
