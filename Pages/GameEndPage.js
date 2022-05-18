import { Text, View, StyleSheet, Image } from "react-native"
import PrimaryButton from "../Components/Ui/PrimaryButton"
import colors from "../Constants/colors"
export default function GameEndPage({userNum, roundsNumber, onStartNewGame}){
    return <View style={styles.GmEndContainer}>
        <View style={styles.GmEndImgContainer}>
            <Image source={require('../assets/images/game-over.gif')} style={styles.GmImg}/>
        </View>
        <View style={styles.marginContainer}>
            <Text style={styles.textStyle}>Your Phone Need {roundsNumber} Rounds To Guess The Number {userNum}</Text>
        </View>
        <View>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    </View>
}

const styles = StyleSheet.create({
    GmEndContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    GmEndTitle:{
        color: colors.colorWhite,
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    GmEndImgContainer:{
        width: 250,
        height: 220,
        borderRadius: 150,
        overflow: 'hidden'
    },
    GmImg:{
        width:'100%',
        height:'100%'
    },
    textStyle:{
        color: colors.colorWhite,
        fontSize: 18,
        padding: 20,
        textAlign: 'center'
    },
    marginContainer:{
        marginVertical: 10
    }
})