import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Category } from '../../../../models/models'

const SubCategoryBarBox = ({ item, active }: { item: Category, active: Category }) => {
    return (
        <View style={
            [
                {
                    paddingHorizontal: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 2.5,
                    borderBottomColor: item.id === active.id ? "#FFD00C" : "transparent",

                }
            ]
        }>
            <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>{item.name}</Text>
        </View>
    )
}

export default SubCategoryBarBox

const styles = StyleSheet.create({})