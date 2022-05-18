import { useState, useEffect } from 'react'
import {View, Text, StyleSheet, Alert, FlatList} from 'react-native'
import NumberContainer from '../Components/Game/NumberContainer'
import PrimaryButton from '../Components/Ui/PrimaryButton'
import Title from '../Components/Ui/Title'
import colors from '../Constants/colors'
import {AntDesign} from '@expo/vector-icons'
import GuessLogItem from '../Components/Game/GuessLogItem'
function genaraterandomnum(min, max, ex){
    const randNum = Math.floor(Math.random()*(max-min) + min)
    if(randNum === ex){
        return(genaraterandomnum(min,max,ex))
    }else{
        return randNum
    }
}
let minBoundary = 1;
let maxBoudary = 100;

function GamePage({userNum, onGameOver}){    
    const initialGuess = genaraterandomnum(1, 100, userNum)
    const [currentGuess, SetCurrentGuess] = useState(initialGuess)
    const [guessRounds, SetGuessRounds] = useState([initialGuess]);
    useEffect(()=>{
        if(currentGuess === userNum){
            onGameOver(guessRounds.length);
        }
    },[currentGuess, userNum, onGameOver])

    useEffect(()=>{minBoundary = 1;
    maxBoudary = 100;},[])

    function nextGuessHandler(direction){
        if((direction === 'lower' && currentGuess < userNum) || (direction === 'greater' && currentGuess > userNum)){
            Alert.alert("Don't Lie!", 'You Know the Number...!', [{text: 'Sorry!', style: 'cancel'}])
            return
        } 
        if(direction==='lower'){
            maxBoudary = currentGuess;            
        }else{
            minBoundary = currentGuess+1;            
        }
        const newRndNumber = genaraterandomnum(minBoundary, maxBoudary, currentGuess)
        SetCurrentGuess(newRndNumber);
        SetGuessRounds(prevGuess => [newRndNumber, ...prevGuess])
    }

    const guessRoundsListLength = guessRounds.length;

    return <View style={styles.container}>
                <Title>X's Guess</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.btntexContiner}>
                    <Text style={styles.TextStyle}>Increse / Decrese</Text>
                    <View style={styles.btnsContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')} style={styles.primarBtnStyle}><AntDesign name="minus" size={24} color="white" /></PrimaryButton>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}><AntDesign name="plus" size={24} color="white" /></PrimaryButton>                      
                    </View>
                </View>
                <View style={styles.listContainer}>
                <FlatList data={guessRounds} renderItem={(itemData)=>{return <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>}} keyExtractor={(item)=> item}/>
                </View>
            </View>
}

export default GamePage

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1
    },
    TextStyle:{
        textAlign: 'center',
        fontSize: 30,
        color: colors.primar500,
        fontWeight: 'bold'
    },
    btnsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btntexContiner:{
        borderWidth:2,
        borderColor: colors.primar400,
        padding: 10,
        borderRadius: 8,
        backgroundColor: colors.primar100
    },
    primarBtnStyle:{
        marginRight: 20
    },
    listContainer:{
        flex: 1,
        padding: 15
    }
    
})