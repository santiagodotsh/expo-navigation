import { useEffect } from 'react'
import { Text, View } from 'react-native'
import {
  Redirect,
  useLocalSearchParams,
  useNavigation
} from 'expo-router'
import { products } from '@/store/products'

export default function ProductScreen() {
  const { id } = useLocalSearchParams()

  const navigation = useNavigation()

  const product = products.find(prod => prod.id === id)

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? 'Product'
    })
  }, [product])

  if (!product) {
    return <Redirect href='/' />
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
