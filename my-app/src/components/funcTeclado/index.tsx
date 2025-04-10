import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {Button} from '../Button'
const App = () => {
  const val = [1,2,3,4,5,6,7,8,9]
  const opera = ["*","-","/","+"]
  return (
    <View style={styles.conteiner}>
      {val.map((val, index) => (
        <Button title={`${val}`}/>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    conteiner:{
        flexWrap:"wrap"

    }
})
export default App;
