import React from "react";
import { Text } from "react-native";

import Estilo from "./estilo";

export default (props) => { 
    
    min = Math.ceil(props.min);
    max = Math.floor(props.max);
    randInt =  Math.floor(Math.random() * (props.max - props.min)) + props.min;
    // randInt = Math.random() * (props.max - props.min + 1) + props.min;
    
    return (
    <Text style={Estilo.txtG}>{randInt}</Text>
    )
} 