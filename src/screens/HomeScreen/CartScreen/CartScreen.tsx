import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../Navigation/HomeNavigator';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import productsGetir from '../../../../assets/productsGetir';
import CartItem from '../../../components/HomeScreen/CartSection/CartItem';
import ProductItem from '../../../components/HomeScreen/CategorySection/Products/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../ReduxSystem/store';
import { clearCart } from '../../../ReduxSystem/slices/cartSlice';
const CartScreen = () => {
  const route = useRoute<RouteProp<RootStackParams,"CartScreen">>()
  console.log(route.params.message)
  type NavigationProp = StackNavigationProp<RootStackParams, 'CartScreen'>;
  const navigation = useNavigation<NavigationProp>();
  const cartSlice = useSelector((state: RootState) => state.cart.carts)
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)
  const dispatch = useDispatch()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 20 }} >
          <Ionicons name="close" size={26} color="white" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => {
          Alert.alert("Tüm Sepeti Sil", "Sepetteki tüm ürünleri silmek istediğinizden emin misiniz?", [
            {
              text: "Evet",
              onPress: () => dispatch(clearCart())
            },
            {
              text: "Hayır",
            }
          ])
        }} style={{ marginRight: 20 }} >
          <FontAwesome5 name="trash" size={24} color="white" />
        </TouchableOpacity>
      )
    })
  }, [navigation])
  const { height } = Dimensions.get("window")
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <ScrollView>
        <FlatList scrollEnabled={false} showsVerticalScrollIndicator={false} data={cartSlice} keyExtractor={(item) => item.id} renderItem={({ item }) => (
          <CartItem item={item} adet={item.adet} />
        )} />
        <Text style={{ fontSize: 18, color: "#5D3EBD", fontWeight: "bold", marginLeft: 10, marginTop: 10, }}>Önerilen Ürünler</Text>
        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 20 }} horizontal>
          {
            productsGetir.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))
          }
        </ScrollView>
      </ScrollView>
      <View>
        <TouchableOpacity activeOpacity={0.6} style={{ width: "90%", flexDirection: "row", height: height * 0.07, marginHorizontal: 20, borderColor: "lightgrey", borderWidth: 1.5, borderRadius: 10, overflow: "hidden", marginBottom: 60 }}>
          <View style={{ backgroundColor: "#5C3EBC", flex: 3, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Devam</Text>
          </View>
          <View style={{ backgroundColor: "white", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "#5D3EBD", fontWeight: "bold", fontSize: 18 }}>₺{totalPrice.toFixed(2)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})