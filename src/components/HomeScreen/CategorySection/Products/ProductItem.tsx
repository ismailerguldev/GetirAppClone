import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import React from 'react'
import { Product } from '../../../../models/models';
import { useNavigation } from '@react-navigation/core';
import { RootStackParams } from '../../../../Navigation/HomeNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

const { width } = Dimensions.get("window")

type productType = {
    item: Product
}
const ProductItem = ({ item }: productType) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    return (
        <TouchableOpacity style={{ width: width * 0.28, gap: 5, paddingHorizontal: 5, marginTop: 15 }} onPress={() => navigation.navigate("ProductDetails", { item })}>
            <View style={{ position: "absolute", zIndex: 1, right: -15, top: -10, backgroundColor: "white", borderWidth: 0.15, borderColor: "gray", width: 30, height: 30, justifyContent: "center", alignItems: "center", borderRadius: 6 }}><Feather name="plus" size={24} color="#5D3EBD" /></View>
            <Image source={{ uri: item.image }}
                style={{ width: width * 0.28, height: width * 0.28, borderRadius: 10, borderWidth: 0.25 }} />
            <Text style={{ color: "#5C3EBC", fontWeight: "bold", fontSize: 16 }}><Text style={{ textDecorationLine: "line-through", color: "gray" }}>₺{item.fiyat}</Text> ₺{item.fiyatIndirimli}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.name}</Text>
            <Text style={{ fontWeight: "bold", color: "gray" }}>{item.miktar}</Text>
        </TouchableOpacity>
    )
}

export default ProductItem