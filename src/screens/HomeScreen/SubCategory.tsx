import { Pressable, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../../Navigation/HomeNavigator'
import ProductsContainer from '../../components/HomeScreen/CategorySection/Products/ProductsContainer'
import SubCategoryTypes from '../../components/HomeScreen/CategorySection/Categories/SubCategoryTypes'
import { Category } from '../../models/models'
import SubCategoryBar from '../../components/HomeScreen/CategorySection/Categories/SubCategoryBar'
import { useNavigation } from '@react-navigation/core'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSelector } from 'react-redux'
import { RootState } from '../../ReduxSystem/store'
type Props = StackScreenProps<RootStackParams, 'SubCategory'>
type NavigationProp = StackNavigationProp<RootStackParams, 'SubCategory'>;
const SubCategory = ({ route }: Props) => {
    const [item, setitem] = useState<Category>(route.params.item)
    const navigation = useNavigation<NavigationProp>();
    const TotalPrice = useSelector((state:RootState) => state.cart.totalPrice)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={() => navigation.navigate("CartScreen")} style={{ height: "60%", backgroundColor: "white", marginRight: "10%", borderRadius: 5, justifyContent: "space-between", alignItems: "center", flexDirection: "row", paddingHorizontal: "5%" }}>
                    <Image source={require("../../../assets/cart.png")} style={{ width: "30%", height: "80%" }} />
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#5D3EBD" }}>₺{TotalPrice.toFixed(2)}</Text>
                    </View>
                </Pressable>),
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="close" size={24} color="white" style={{marginLeft:20}} />
                </TouchableOpacity>
            ),
        });
    }, [navigation, TotalPrice]);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SubCategoryBar active={item} />
            <SubCategoryTypes />
            <ProductsContainer />
        </ScrollView>
    )
}

export default SubCategory

const styles = StyleSheet.create({

})