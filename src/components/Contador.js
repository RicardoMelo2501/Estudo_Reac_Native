import React from "react";
import { Text, Button } from "react-native";
import Estilo from "./estilo";


export default props => {
    let numero = props.inicial

    const inc = () => {
        numero++
        console.warn(numero)
    }

    const dec = () => numero--

    return (
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="Aumentar" onPress={inc}></Button>
            <Button title="Diminuir" onPress={dec}></Button>
        </>
    )
}