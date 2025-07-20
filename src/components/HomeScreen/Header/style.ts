import { Dimensions, StyleSheet } from 'react-native'
const { height } = Dimensions.get('window')
export const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    logoSection: {
        backgroundColor: "#6a43d9",
        width: "100%",
        height: "100%"
    },
    addressSection: {
        height: height * 0.064,
        backgroundColor: "#F7D102",
        flexDirection: "row"
    },
    addressBox: {
        backgroundColor: "white",
        width: "80%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30
    },
    textEv: {
        fontWeight: "bold",
        fontSize: 16
    },
    tvsBox: {
        justifyContent: "center",
        alignItems: "center",
        width: "20%"
    },
    textTvs: {
        fontSize: 12,
        color: "#6a43d9",
        fontWeight:"bold"
    },
    textDk: {
        fontSize: 24,
        color: "#6a43d9",
        fontWeight:"bold"
    }
})