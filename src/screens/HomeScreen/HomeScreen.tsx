import { Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import BannerCarousel from '../../components/HomeScreen/BannerCarrousel/BannerCarousel'
import CategorySection from '../../components/HomeScreen/CategorySection/CategorySection'
import Header from '../../components/HomeScreen/Header/Header'
function HomeScreen() {
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <Header />
            <BannerCarousel />
            <CategorySection />
        </ScrollView>
    )
}

export default HomeScreen