import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const App = () => {
  const [count,setCount] = useState(5);
  const [isLimit,setIsLimit] = useState(false);
  const [btnColor,setBtnColor] = useState('green')

  const decrease = () => {
    setIsLimit(false);
    setBtnColor('green');
    if(count > 1){
      setCount(count-1);
    }
    return;
  }
  
  const increase = () => {
    if(count < 10){   
      setCount(count+1);
      return;
    }
    setBtnColor('grey');
    setIsLimit(true);
    return;
  }

  return(
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
      {isLimit && <Text style={styles.limitText}>Limit Reached: {count}</Text>}
      <View style={styles.btnContainer}>
            <TouchableOpacity style={[styles.btnArea, {backgroundColor: btnColor}]} onPress={!isLimit ? increase : null}>
            <Text style={styles.btnText}>Increase</Text>
            </TouchableOpacity>

          <TouchableOpacity style={[styles.btnArea, {backgroundColor: 'red'}]} onPress={decrease}>
            <Text style={styles.btnText}>Decrease</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  counterText:{
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black'
  },
  btnContainer:{
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btnArea:{
    width: 100,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12
  },
  btnText:{
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  limitText:{
    fontSize: 20,
    fontWeight: 'bold',
    margin: 25,
    backgroundColor: 'orange',
    width: '90%',
    textAlign: 'center',
    padding: 5,
    color: 'black'
  }
})

export default App;