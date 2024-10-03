import { SafeAreaView, View } from 'react-native'
import { router } from 'expo-router'
import { CustomButton } from '@/components/shared/custom-button'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className='px-10 mt-5'>
        <CustomButton onPress={() => router.push('/products')} className='mb-2'>
          Products
        </CustomButton>

        <CustomButton
          onPress={() => router.push('/profile')}
          color='secondary'
          className='mb-2'
        >
          Profile
        </CustomButton>

        <CustomButton
          onPress={() => router.push('/settings')}
          color='tertiary'
          className='mb-2'
        >
          Settings
        </CustomButton>
      </View>
    </SafeAreaView>
  )
}
