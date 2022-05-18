import {View, Text, StyleSheet} from 'react-native'
import colors from '../../Constants/colors'
import Colors from '../../Constants/colors'
export default function GuessLogItem({roundNumber, guess}){
    return <View style={styles.listItem}>
        <Text style={styles.textColor}>#{roundNumber}</Text>
        <Text style={styles.textColor}>Your Guess: {guess}</Text>
    </View>
}

const styles = StyleSheet.create({
    listItem:{
        borderColor: Colors.primar300,
        borderWidth: 1,
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
        backgroundColor: Colors.primar200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: Colors.primar500,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
        
    },
    textColor:{
        color: colors.primar500,
        fontSize: 18,
        fontWeight: 'bold'
    }
})

