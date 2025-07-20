import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SubCategoryTypeBox from './SubCategoryTypeBox'
const { height } = Dimensions.get("window")
const SubCategoryTypes = () => {
  const [active,setActive] = useState<string>("Birlikte İyi Gider")
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center", justifyContent: "space-evenly", width: "100%" }} style={{ width: "100%", height: height * 0.072}} showsHorizontalScrollIndicator={false} horizontal bounces>
      {
        ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map(item => (
          <SubCategoryTypeBox key={item} setCategory={setActive} item={item} active={active} />
        ))
      }
    </ScrollView>
  )
}

export default SubCategoryTypes

const styles = StyleSheet.create({})