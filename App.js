import { useState } from 'react';
import { StyleSheet, ImageBackground, View, SafeAreaView } from 'react-native';
import StartGame from './Pages/StartGamePage';
import { LinearGradient } from 'expo-linear-gradient';
import GamePage from './Pages/GamePage'
import colors from './Constants/colors';
import GameEndPage from './Pages/GameEndPage';


function App() {
  const [userNum, SetUserNum] = useState();
  const [gameOver, SetGameOver] = useState(true);
  const [guessRounds, SetGuessRounds] = useState(0);
  function pickedNumberHandler(pickedNum){
    SetUserNum(pickedNum);
    SetGameOver(false);
  }
  function gameOverHandler(numberOfRouds){
    SetGameOver(true)
    SetGuessRounds(numberOfRouds)
  }
  function startNewGameHandler(){
    SetUserNum(null);
    SetGuessRounds(0);
  }
  let screen = <StartGame picknum={pickedNumberHandler}/>
  if(userNum){
    screen = <GamePage userNum={userNum} onGameOver={gameOverHandler}/>
  }
  if(gameOver && userNum){
    screen = <GameEndPage userNum={userNum} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
  }


  return (
    <LinearGradient style={styles.rootScreen} colors={[colors.primar100,colors.primar500]}>
      <ImageBackground source={require('./assets/images/bg.jpg')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.imageStyle}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

export default App

const styles = StyleSheet.create({
  rootScreen:{
    flex: 1
  },
  imageStyle:{
    opacity: 0.15
  }
});
