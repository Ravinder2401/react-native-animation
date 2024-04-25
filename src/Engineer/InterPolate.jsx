
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

const InterPolate = () => {
    const animation = useSharedValue(1);  // setting initial value for animation
    const [clicked,setClicked] = useState(false);

    // defining animation styles
    const animatedStyle = useAnimatedStyle(()=> {
        // In interpolate function we pass three parameters 1- animation value, 2- input range, 3- output range (means what we are showing on the basis of input range like for 1 we display width as 100 and for 0 we display width as 200)
        const width = interpolate(animation.value, [1,0], [100,200]);
        const backgroundColor = interpolateColor(animation.value, [1,0], ['orange', 'purple']);
        const borderRadius = interpolate(animation.value, [1,0], [0,100]);
        return {
            width: width,
            height: width,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius
        }
    })
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Animated.View style={[{width:100, height:100, backgroundColor:'red'},animatedStyle]}>

      </Animated.View>
      <TouchableOpacity
      onPress={()=>{
        if(clicked) {
            // animation.value = 1;
            // animation.value = withSpring(1);
            animation.value = withTiming(1, {duration:500});
        } else {
            // animation.value = 0;
            animation.value = withTiming(0, {duration:500});
        }
        setClicked(!clicked);
      }}
      style={{borderWidth:1, width:200, height:50, justifyContent:'center', alignItems:'center', marginTop:30}}>
        <Text>Start Animation</Text>
      </TouchableOpacity>
    </View>
  )
}

export default InterPolate

const styles = StyleSheet.create({})