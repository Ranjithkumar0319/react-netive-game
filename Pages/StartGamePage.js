import { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Alert} from 'react-native'
import PrimaryButton from '../Components/Ui/PrimaryButton';
import Title from '../Components/Ui/Title';
import colors from '../Constants/colors';
function StartGame({picknum}){
    const [enteredNumber, SetEnteredNumber] = useState('');

    function enteredText(numberVal){
        SetEnteredNumber(numberVal)
    }

    function resetNumberHandler(){
        SetEnteredNumber('');
    }

    function confirmBtnHandler(){
        const numberConfirm = parseInt(enteredNumber);
        if(isNaN(numberConfirm) || numberConfirm <= 0 || numberConfirm > 99){
            Alert.alert(`${enteredNumber}`,'It Should be a Number between 1 to 99.',[{text: 'Okay', style: 'destructive', onPress: resetNumberHandler}])
            return
        }
        picknum(numberConfirm)

    }
    return <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
        <View style={styles.InputContainer}>
            <Text style={styles.headerStyle}>Enter a Number</Text>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false} onChangeText={enteredText} value={enteredNumber}/>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmBtnHandler}>Confirm</PrimaryButton>
                </View>            
            </View>
        </View>
    </View>
}

export default StartGame;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    headerStyle:{
        color: colors.primar100,
        fontWeight: 'bold',
        fontSize: 24
    },
  InputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.primar500,
    borderRadius: 8,
    elevation: 4,
    width: '90%'
  },

  numberInput: {
      width: 50,
      height: 50,
      textAlign: 'center',
      fontSize: 30,
      borderBottomColor: colors.primar200,
      borderBottomWidth: 2,
      color: colors.primar100,
      fontWeight: 'bold',
      marginVertical: 8
  },
  buttonContainer: {
      flexDirection: 'row'
  }
});