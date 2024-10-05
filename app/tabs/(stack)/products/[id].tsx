import { Text, View } from 'react-native'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { products } from '@/store/products'

export default function ProductScreen() {
  const { id } = useLocalSearchParams()

  const product = products.find(prod => prod.id === id)

  if (!product) {
    return <Redirect href='/tabs/(stack)/home' />
  }

  return (
    <View className='my-5 px-4'>
      <Text className='text-2xl font-work-black'>
        {product.title}
      </Text>

      <Text>{product.description}</Text>
      
      <Text className='font-work-black mt-2'>
        $ {product.price}
      </Text>
    </View>
  )
}
