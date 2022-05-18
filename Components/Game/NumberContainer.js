import { View, Text, StyleSheet } from "react-native"
import colors from "../../Constants/colors"
export default function NumberContainer({children}){
    return <View style={styles.TextContainer}>
        <Text style={styles.TextStyle}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    TextContainer: {
        borderWidth: 2,
        borderColor: colors.primar400,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.colorWhite,
        minWidth: '100%',
        marginVertical: 20
    },
    TextStyle:{
        color: colors.primar400,
        fontSize: 36,
        fontWeight: "bold"
    }
})