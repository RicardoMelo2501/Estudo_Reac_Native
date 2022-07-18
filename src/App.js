import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

// import X , { Comp2, Comp3 } from './components/Multi'
// import Primeiro from './components/Primeiro'
import MinMax from './components/MinMax'
import Random from './components/Aleatorio'
import Botao from './components/Botao'

export default () => ( 
  <SafeAreaView style={style.App}>
    <Botao></Botao>
    {/* <Random min={10} max={90} ></Random>
    <Random min={10} max={90} ></Random>
    <Random min={10} max={90} ></Random>
    <Random min={10} max={90} ></Random>
    <Random min={10} max={90} ></Random>
    <Random min={10} max={90} ></Random> */}
    {/* <MinMax min="9" max="20" ></MinMax> */}
    
    {/* <X />
    <Comp2 />
    <Comp3 />
    <Primeiro /> */}
  </SafeAreaView>
)

const style = StyleSheet.create({
  App: {
      backgroundColor: "green",
      flexGrow: 1,
      justifyContent: "center",
      alignItems: 'center',
      padding: 20
  }
})