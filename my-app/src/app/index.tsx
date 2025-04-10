import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, } from "react-native"
// import { Button } from "../components/Button"
import App from "../components/funcTeclado"
import { Input } from "../components/Input"

export default function Index() {
  const [inputValue, setInputValue] = useState('');
  const [soma, setSoma] = useState<Number>();

  const handleKeyPress = (val: string | number) => {
    setInputValue(prev => prev + val); 
  };

  const limpar = ()=>{
    setInputValue('');
  }
  const apagar = () => {
    setInputValue(prev => prev.slice(0, -1)); 
  };
  
  useEffect(() => {
  try {
    if (inputValue !== '') {
      const resultado = eval(inputValue);
      setSoma(resultado);
    } else {
      setSoma(undefined);
    }
  } catch (error) {
    setSoma(undefined); 
  }
}, [inputValue]);



  return (
    <View style={styes.container}>
      <Input editable={true} value={inputValue} />
      <Input editable={false} style={styes.Input} value={soma !== undefined ? String(soma) : ''} />
      <App onKeyPress={handleKeyPress} onClear={limpar} onBackspace={apagar}/>
    </View>
  );
}

const styes = StyleSheet.create({
    title: {
        color: "#453467",
        fontSize: 24,
        fontWeight: "bold",
    },
    container: {
        width: "100%",
        justifyContent: "center",
        backgroundColor: "#1D252D"
    },
    Input: {
        // width:"100%",
        height: 200,
        borderWidth: 2,
        // borderRadius:10,
        borderColor: "#DDDAE8",
        borderTopWidth: 0,
        // borderTopColor: "#",
        margin: 10,
        marginTop: 0,
        // padding:12,
        fontSize: 40,
        color:"#505759"
        
    }
})