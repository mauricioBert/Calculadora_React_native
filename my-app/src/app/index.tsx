import { useState } from "react" 
import {View,Text, StyleSheet,Alert} from "react-native"
import { Button } from "../components/Button"
import App from "../components/funcTeclado"
import {Input} from "../components/Input"

export default function Index(){
    
    const [names,setName] = useState("")

    return(
        <View  style={styes.container}>
            <App />
            {/* <Input  onChangeText={setName}/> */}
            {/* <Button title="1" onPress={handleMessage} /> */}
            {/* <Input /> */}
        </View>
    )
}

const styes = StyleSheet.create({
    title:{
        color:"#453467",
        fontSize:24,
        fontWeight:"bold",
    },
    container:{
        width:"100%",
        height:"100%",
        marginTop:30,
        // gap:16,
        padding:32,
        justifyContent:"center"
    }
})