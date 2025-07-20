import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { addToCart } from '../../../../ReduxSystem/slices/cartSlice'
import { useDispatch } from 'react-redux'
import { Product } from '../../../../models/models'
const AddToCartButton = ({item}:{item:Product}) => {
    const dispatch = useDispatch()
    return (
        <View style={{ width: "100%", position:"absolute", bottom:"-15%" }}>
            <TouchableOpacity onPress={() => dispatch(addToCart(item))} activeOpacity={0.4} style={{ backgroundColor: "#5D39C1", padding: 20, marginHorizontal: 20, justifyContent: "center", alignItems: "center", borderRadius: 15 }}>
                <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>Sepete Ekle</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddToCartButton

const styles = StyleSheet.create({})