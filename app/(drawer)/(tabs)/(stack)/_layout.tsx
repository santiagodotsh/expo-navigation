import { Pressable } from 'react-native'
import { router, Stack, useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export default function StackLayout() {
  const navigation = useNavigation()

  const onHeaderLeft = (canGoBack?: boolean) => {
    if (canGoBack) {
      router.back()

      return
    }

    navigation.dispatch(DrawerActions.toggleDrawer)
  }

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerLeft: ({ tintColor, canGoBack }) => (
          <Pressable onPressIn={() => onHeaderLeft(canGoBack)} className='mr-5'>
            <Ionicons
              name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
              size={24}
              color={tintColor}
            />
          </Pressable>
        ),
        animation: 'slide_from_right',
        contentStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen
        name='home/index'
        options={{
          title: 'Stack Screen'
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
