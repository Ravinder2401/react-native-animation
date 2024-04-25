import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

const PartOne = () => {
  const [clicked,setClicked] = useState(false);
  const [backgroundColor,setBackgroundColor] = useState('orange');
  const animation = useSharedValue(10);
  const animatedStyle = useAnimatedStyle(()=>{
    // return {transform: [{translateX: animation.value}]}
    // return {transform: [{rotate:` ${animation.value}deg`}],backgroundColor:backgroundColor}
    return {transform: [{scale: animation.value}],backgroundColor:backgroundColor}
  }) 
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Animated.View style={[{width:100, height:100},animatedStyle]}>

      </Animated.View>
      <TouchableOpacity onPress={()=>{
        // animation.value=100
        // animation.value=withSpring(100)
        if(clicked) {
          // animation.value=withSpring(100)

          // animation.value=withTiming(100,{duration:2000});
          // setBackgroundColor('orange');
          animation.value=withTiming(1,{duration:500});


        } else {
          // animation.value=withSpring(-100);
          // setBackgroundColor('red');
          animation.value=withTiming(0.5,{duration:500});
        }
        setClicked(!clicked)
        }} style={{borderWidth:1, width:200, height:50, justifyContent:'center', alignItems:'center', marginTop:30}}>
        <Text>Start Animation</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PartOne

const styles = StyleSheet.create({})