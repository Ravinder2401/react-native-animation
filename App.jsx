import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PartOne from './src/Engineer/PartOne'
import InterPolate from './src/Engineer/InterPolate'
import InfiniteAnimation from './src/Engineer/InfiniteAnimation'
import InfiniteBounce from './src/Engineer/InfiniteBounce'
import ScrollAnimationGesture from './src/Engineer/ScrollAnimationGesture'

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <PartOne/> */}
      {/* <InterPolate/> */}
      {/* <InfiniteAnimation/> */}
      {/* <InfiniteBounce/> */}
      <ScrollAnimationGesture/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})