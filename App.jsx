import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PartOne from './src/Engineer/PartOne'
import InterPolate from './src/Engineer/InterPolate'

const App = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      {/* <PartOne/> */}
      <InterPolate/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})