import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PartOne from './src/Engineer/PartOne'
import InterPolate from './src/Engineer/InterPolate'
import InfiniteAnimation from './src/Engineer/InfiniteAnimation'
import InfiniteBounce from './src/Engineer/InfiniteBounce'

const App = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      {/* <PartOne/> */}
      {/* <InterPolate/> */}
      {/* <InfiniteAnimation/> */}
      <InfiniteBounce/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})