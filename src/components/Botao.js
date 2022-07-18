import React from "react";
import { Button } from "react-native";

export default props => {
    function Executar() {
        return console.warn("Eureka")
    }

    return (
        <Button title="Executar" onPress={Executar}/>
        )
}