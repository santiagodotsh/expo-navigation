import {
  SafeAreaView,
  Text,
  View
} from 'react-native'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className='mt-5 mx-2.5'>
        <Text
          style={{ fontFamily: 'WorkSans-Black' }}
          className='text-3xl'
        >
          Expo Navigation
        </Text>

        <Text className='text-2xl font-work-black text-primary'>
          Expo Navigation
        </Text>

        <Text className='text-2xl font-work-medium text-secondary'>
          Expo Navigation
        </Text>

        <Text className='text-2xl font-work-light text-tertiary'>
          Expo Navigation
        </Text>
      </View>
    </SafeAreaView>
  )
}
