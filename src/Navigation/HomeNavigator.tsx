import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import { Category, Product } from '../models/models'
import ProductDetails from '../screens/HomeScreen/ProductDetails'
import SubCategory from '../screens/HomeScreen/SubCategory'
import Ionicons from '@expo/vector-icons/Ionicons';
import CartScreen from '../screens/HomeScreen/CartScreen/CartScreen'
import { useNavigation } from '@react-navigation/core'
export type RootStackParams = {
    SubCategory: { item: Category }
    Home: undefined,
    ProductDetails: { item: Product },
    CartScreen: {message: string}
}
const Stack = createStackNavigator<RootStackParams>()
const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} options={{
                headerStyle: {
                    backgroundColor: "#5C3EBC",
                },
                headerTitle: () => (<Image source={require("../../assets/getirlogo.png")} style={{ width: 80, height: 30 }} />),
                headerTitleAlign: "center"
            }} />
            <Stack.Screen name='SubCategory' component={SubCategory} options={{
                headerStyle: {
                    backgroundColor: "#5C3EBC",
                },
                headerTitle: () => (<Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Ürünler</Text>),
                headerTitleAlign: "center",
                headerTintColor: "white",
                
            }} />
            <Stack.Screen name='ProductDetails' component={ProductDetails} options={{
                headerStyle: {
                    backgroundColor: "#5C3EBC",
                },
                headerTitle: () => (<Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Ürün Detayı</Text>),
                headerTitleAlign: "center",
                headerTintColor: "white",
                headerRight: () => <TouchableOpacity style={{ marginRight: 20 }}><Ionicons name='heart' size={28} color="#32177a" /></TouchableOpacity>,

            }} />
            <Stack.Screen name='CartScreen' component={CartScreen} options={{
                headerStyle: {
                    backgroundColor: "#5C3EBC",
                },
                headerTitle: () => (<Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Sepetim</Text>),
                headerTitleAlign: "center"
            }} />
        </Stack.Navigator>
    )
}

export default HomeNavigator

const styles = StyleSheet.create({})