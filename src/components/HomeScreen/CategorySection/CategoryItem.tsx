import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Category } from '../../../models/models'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '../../../Navigation/HomeNavigator'
type categoryItemProps = {
    item: Category
}
const { width } = Dimensions.get('window')
const CategoryItem = ({ item }: categoryItemProps) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("SubCategory", { item })}>
            <Image source={{ uri: item.src }} style={styles.image} />
            <Text style={{ fontSize: 14 }}>{item.name}</Text>
        </TouchableOpacity>
    )
}
export default CategoryItem

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        width: width * 0.25,
        height: width * 0.25,
    },
    image: {
        width: width * 0.18,
        height: width * 0.18,
        borderRadius: 10,
        borderWidth: 0.3,
        borderColor: "gray"
    }
})