import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import productsGetir from '../../../../../assets/productsGetir'
import ProductItem from './ProductItem'

const ProductsContainer = () => {
    return (
        <View style={{ gap: 10, marginHorizontal:5 }}>
            <View style={{ flexDirection: "row", paddingVertical: 10, gap: 20, borderBottomWidth: 0.5, borderColor: "grey" }}>
                {
                    productsGetir.slice(0, 2).map(item => (
                        <ProductItem item={item} key={item.id} />
                    ))
                }
            </View>
            <Text style={{ color: "gray", fontWeight: "bold", fontSize: 16 }}>Çubuk</Text>
            <View style={{ flexDirection: "row", paddingVertical: 10, gap: 20, flexWrap: "wrap"}}>
                {
                    productsGetir.slice(2).map(item => (
                        <ProductItem item={item} key={item.id} />
                    ))
                }
            </View>
        </View>
    )
}

export default ProductsContainer

const styles = StyleSheet.create({})