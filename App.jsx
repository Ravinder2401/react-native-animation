import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PartOne from './src/Engineer/PartOne'

const App = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <PartOne/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})