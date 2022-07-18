import React from 'react'
import { Text } from 'react-native'

import Estilo from './estilo'

export default (props) => {
    
    console.warn(props)

    return (
        <Text style={Estilo.txtG}>
            O Valor Mínimo é <Text style={ {color: "red"} }>{props.min}</Text> e o valor Máximo é <Text style={ {color: "red"} }>{props.max}</Text>
        </Text>
    )
}