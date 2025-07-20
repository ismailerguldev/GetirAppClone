import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Product } from '../../../models/models'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { decreaseItem, increaseItem, removeItem } from '../../../ReduxSystem/slices/cartSlice';
const CartItem = ({ item, adet }: { item: Product, adet: number }) => {
    const { width, height } = Dimensions.get("window")
    const dispatch = useDispatch()
    return (
        <View style={{ width: "100%", height: height * 0.2, borderBottomWidth: 0.4, borderColor: "gray", justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
            <Image source={{ uri: item.image }} style={{ width: width * 0.25, height: width * 0.25 }} />
            <View style={{ width: width * 0.3 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray" }}>{item.miktar}</Text>
                <View>
                    <Text style={{ fontSize: 18, color: "gray", textDecorationLine: "line-through", fontWeight: "bold" }}>₺{item.fiyat}</Text>
                    <Text style={{ fontSize: 20, color: "#5C3EBC", fontWeight: "bold" }}>₺{item.fiyatIndirimli}</Text>
                </View>
            </View>
            <View style={{ width: width * 0.3, flexDirection: "row" }}>
                <TouchableOpacity onPress={() => {
                    if(adet > 1){
                        dispatch(decreaseItem(item.id))
                    }else{
                        dispatch(removeItem(item))
                    }
                }} style={{ width: width * 0.1, height: width * 0.1, justifyContent: "center", alignItems: "center", borderWidth: 0.1, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderRightColor: "transparent", backgroundColor: "#FAFAFA" }} >
                    <AntDesign name="minus" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ width: width * 0.1, height: width * 0.1, textAlign: "center", verticalAlign: "middle", backgroundColor: "#5D3EBD", color: "white", fontWeight: "bold" }}>{adet}</Text>
                <TouchableOpacity onPress={() => dispatch(increaseItem(item.id))} style={{ width: width * 0.1, height: width * 0.1, justifyContent: "center", alignItems: "center", borderWidth: 0.1, borderTopRightRadius: 10, borderBottomRightRadius: 10, borderLeftColor: "transparent", backgroundColor: "#FAFAFA" }} >
                    <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({})