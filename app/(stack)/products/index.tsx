import { FlatList, Text, View } from 'react-native'
import { products } from '@/store/products'
import { Link } from 'expo-router'

export default function ProductsScreen() {
  return (
    <View className='flex flex-1'>
      <FlatList
        data={products}
        keyExtractor={product => product.id}
        renderItem={({ item }) => (
          <View className='my-5 px-4'>
            <Text className='text-2xl font-work-black'>
              {item.title}
            </Text>

            <Text>{item.description}</Text>

            <View className='flex flex-row justify-between mt-2'>
              <Text className='font-work-black'>
                $ {item.price}
              </Text>

              <Link href={`/(stack)/products/${item.id}`} className='text-primary'>
                Details
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  )
}
