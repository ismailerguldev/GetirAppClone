import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get("window")
const ProductDetailsImageCarousel = ({ images }: { images?: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const onViewRef = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index)
        }
    })
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
    return (
        <View style={{ width: "100%", minHeight: width * 0.5, justifyContent: "center", alignItems: "center", gap: 15, marginTop: 15 }}>
            <FlatList ref={flatListRef} onViewableItemsChanged={onViewRef.current} viewabilityConfig={viewConfigRef.current} style={{ width: width * 0.5, borderRadius: 10, borderWidth: 0.5 }} horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={{ height: "100%", justifyContent: "center", alignItems: "center" }} data={images} renderItem={({ item }) => (
                <Image source={{ uri: item }} style={{ width: width * 0.5, height: width * 0.5, resizeMode: "stretch", }} />
            )} />
            <View style={{ flexDirection: "row", gap: 10 }}>
                {images?.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            { width: 12, height: 12, backgroundColor: "#d8d8d8ff", borderRadius: 15 },
                            currentIndex === index && { backgroundColor: "#5D3EBD" },
                        ]}
                    />
                ))}
            </View>
        </View>
    )
}

export default ProductDetailsImageCarousel
