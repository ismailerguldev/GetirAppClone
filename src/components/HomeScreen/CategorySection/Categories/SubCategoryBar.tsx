import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import categoriesGetir from '../../../../../assets/categoriesGetir'
import { Category } from '../../../../models/models'
import SubCategoryBarBox from './SubCategoryBarBox'
const { height } = Dimensions.get("window")
const SubCategoryBar = ({ active }: { active: Category }) => {
    const [categories, setcategories] = useState<Category[]>(categoriesGetir)
    return (
        <ScrollView style={{ width: "100%", height: height * 0.065, backgroundColor: "#7849F7" }} showsHorizontalScrollIndicator={false} bounces horizontal>
            {
                categories.map(item => (
                    <SubCategoryBarBox item={item} active={active} key={item.id} />
                ))
            }
        </ScrollView>
    )
}

export default SubCategoryBar

const styles = StyleSheet.create({})