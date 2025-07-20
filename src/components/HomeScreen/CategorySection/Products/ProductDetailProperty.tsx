import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Product } from '../../../../models/models'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const ProductDetailProperty = ({ product }: { product: Product }) => {
    const [details, SetDetails] = useState<string[]>(["Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti", "İçindekiler", "Besin Değerleri", "Kullanım", "Ek Bilgiler"])
    return (
        <View>
            <View style={{ borderBottomWidth: 0.5, borderColor: "gray", padding: 10 }}>
                <Text style={{ fontSize: 18, color: "gray" }}>Detaylar</Text>
            </View>
            <View style={{ width: "100%", marginTop: 10 }}>
                {
                    details.map((item, index) => (
                        <DetailItem key={index} item={item} index={index} />
                    ))
                }
            </View>
        </View>
    )
}
const DetailItem = ({ item, index }: { item: string, index: number }) => {
    return (
        <View style={
            [
                { borderBottomWidth: 0.6, borderColor: "lightgray", padding: 10 },
                index !== 0 && { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
                index === 1 && { marginTop: 15 }
            ]
        }>
            <Text style={{
                fontSize: index !== 0 ? 18 : 14,
                color: index !== 0 ? "grey" : "black",
                fontWeight: index !== 0 ? "400" : "normal"
            }}>{item}</Text>
            {
                index !== 0 ? <FontAwesome5 name="sort-down" size={24} color="grey" /> : null
            }
        </View>
    )
}
export default ProductDetailProperty

const styles = StyleSheet.create({})