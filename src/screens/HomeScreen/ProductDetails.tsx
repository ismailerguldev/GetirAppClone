import { StyleSheet, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../../Navigation/HomeNavigator'
import { Product } from '../../models/models'
import ProductDetailsImageCarousel from '../../components/HomeScreen/CategorySection/Products/ProductDetailsImageCarousel'
import ProductDetailInfos from '../../components/HomeScreen/CategorySection/Products/ProductDetailInfos'
import ProductDetailProperty from '../../components/HomeScreen/CategorySection/Products/ProductDetailProperty'
import AddToCartButton from '../../components/HomeScreen/CategorySection/Products/AddToCartButton'

type Props = StackScreenProps<RootStackParams, "ProductDetails">
const ProductDetails = ({ route }: Props) => {
  const [item, setItem] = useState<Product>(route.params.item)
  return (
    <ScrollView StickyHeaderComponent={AddToCartButton} style={{backgroundColor:"white"}}>
      <ProductDetailsImageCarousel images={item.images} />
      <ProductDetailInfos product={item} />
      <ProductDetailProperty product={item} />
      <AddToCartButton item={item} />
    </ScrollView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})