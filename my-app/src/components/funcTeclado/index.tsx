import React from 'react';
import { View, Text,StyleSheet,Alert } from 'react-native';
import {Button} from '../Button'

type Props = {
  onKeyPress: (value: string | number) => void;
  onClear: ()=>void;
  onBackspace: ()=>void
};

const App = ({onKeyPress,onClear, onBackspace}:Props) => {
  const val = [1,2,3,4,5,6,7,8,9,0]
  const opera = ["*","-","/","+"]

  return (
    
    <View style={styles.conteiner}>
  
      {val.map((val, index) => (
        <Button title={`${val}`}  onPress={()=> onKeyPress(val)}/>
      ))}
      {opera.map((opera, index) => (
        <Button title={`${opera}`} onPress={()=> onKeyPress(opera)} />
      ))}
      <Button title="<--" onPress={onBackspace} />
      <Button title="C" onPress={onClear} />

    </View>
  );
};

const styles = StyleSheet.create({
    conteiner:{
        // width:"100%",
        justifyContent:"center",
        // alignItems:"center",
        flexWrap:"wrap",
        margin:10,
        gap:2,
        flexDirection:"row"
    },
    button:{
      maxHeight:95,
      maxWidth:200,
      width:190,
      height:95,
      backgroundColor:"#a2a2b4",
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center"
    }
})
export default App;
