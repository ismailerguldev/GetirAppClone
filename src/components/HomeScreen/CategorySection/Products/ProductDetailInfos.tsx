import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Product } from '../../../../models/models'

const ProductDetailInfos = ({ product }: { product: Product }) => {
    return (
        <View>
            <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold", color: "#5D3EBD" }}>₺{product.fiyatIndirimli}</Text>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}>{product.name}</Text>
                    <Text style={{ textAlign: "center", fontWeight: "bold", color: "gray" }}>{product.miktar}</Text>
                </View>
            </View>
        </View>
    )
}

export default ProductDetailInfos

const styles = StyleSheet.create({})