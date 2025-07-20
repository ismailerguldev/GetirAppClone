import { Text, View, Image } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react'
import { styles } from './style';
const AddressComponent = () => {
    return (
        <View style={styles.addressSection}>
            <View style={styles.addressBox}>
                <Image source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }} width={30} height={30} />
                <Text style={styles.textEv}>Ev</Text>
                <Text>Dedepaşa Blv. Yenişehir Mahallesi...</Text>
                <Entypo name="chevron-right" size={24} color="#6a43d9" />
            </View>
            <View style={styles.tvsBox}>
                <Text style={styles.textTvs}>TVS</Text>
                <Text style={styles.textDk}>13dk</Text>
            </View>
        </View>
    )
}

export default AddressComponent