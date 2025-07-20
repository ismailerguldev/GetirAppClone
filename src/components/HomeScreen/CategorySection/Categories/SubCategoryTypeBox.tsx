import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SubCategoryTypeBox = ({ item, active, setCategory }: { item: string, active: string, setCategory: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <TouchableOpacity onPress={() => setCategory(item)}>
            <View style={
                [
                    { padding: 10 },
                    active === item && { backgroundColor: "#5C3EBC", borderRadius: 10 }
                ]
            }>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: active === item ? "white" : "#5C3EBC" }}>{item}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SubCategoryTypeBox

const styles = StyleSheet.create({})