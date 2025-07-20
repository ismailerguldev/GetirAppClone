import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddressComponent from './AddressComponent'

const Header = () => {
  return (
    <View testID='HeaderComponent'>
      <AddressComponent />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})