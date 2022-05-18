 import { Text, StyleSheet } from "react-native"
import colors from "../../Constants/colors"
export default function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.colorWhite,
        textAlign: 'center',
        padding:10,
        borderWidth:4,
        borderColor: colors.primar400,
        borderRadius: 5,
        backgroundColor: colors.primar300
    }
})