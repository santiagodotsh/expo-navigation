import { Stack } from 'expo-router'

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        animation: 'slide_from_right',
        contentStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen
        name='home/index'
        options={{
          title: 'Home Screen'
        }}
      />

      <Stack.Screen
        name='products/index'
        options={{
          title: 'Products Screen'
        }}
      />

      <Stack.Screen
        name='profile/index'
        options={{
          title: 'Profile Screen'
        }}
      />

      <Stack.Screen
        name='settings/index'
        options={{
          title: 'Settings Screen'
        }}
      />
    </Stack>
  )
}
