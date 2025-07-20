import { FlatList, Text, View } from 'react-native'
import React, { useState } from 'react'
import categoriesGetir from '../../../../assets/categoriesGetir'
import { styles } from './style'
import CategoryItem from './CategoryItem'
import { Category } from '../../../models/models'
const CategorySection = () => {
    const [categories, setcategories] = useState<Category[]>(categoriesGetir)
    return (
        <View style={styles.container}>
            <View style={styles.categoriesContainer}>
                {
                    categories.map((item) => (
                        <CategoryItem key={item.id} item={item} />
                    ))
                }
            </View>
        </View>
    )
}

export default CategorySection