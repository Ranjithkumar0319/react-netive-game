import {View, Text, Pressable, StyleSheet} from 'react-native'
import colors from '../../Constants/colors';
function PrimaryButton({children, onPress}){
    return <View style={styles.buttonOuterContainer}>
                <Pressable style={styles.buttonInnerContainer} onPress={onPress} android_ripple={{color: '#640233'}}>
                    <Text style={styles.buttonText}>{children}</Text>
                </Pressable>
            </View>

}
export default PrimaryButton;
const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 30,
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: colors.primar500,    
    paddingVertical: 8,
    paddingHorizontal:16,
    elevation: 2,
    minWidth: 150
  } ,
  buttonText: {
      color: colors.colorWhite,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold'
  }
});