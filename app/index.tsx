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

        <Text className='text-2xl font-work-black'>
          Expo Navigation
        </Text>

        <Text className='text-2xl font-work-medium'>
          Expo Navigation
        </Text>

        <Text className='text-2xl font-work-light'>
          Expo Navigation
        </Text>
      </View>
    </SafeAreaView>
  )
}
