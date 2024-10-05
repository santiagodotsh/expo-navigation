import { Text, View } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
  type DrawerContentComponentProps
} from '@react-navigation/drawer'

export function CustomDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View className='flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary'>
        <View className='flex justify-center items-center bg-white rounded-full h-24 w-24'>
          <Text className='text-primary font-work-black text-3xl'>
            SR
          </Text>
        </View>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}
