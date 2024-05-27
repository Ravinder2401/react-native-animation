import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const AnimatedSearchBar = () => {
  const animation = useSharedValue(0);
  const [value,setValue] = useState(0);
  const animationStyle = useAnimatedStyle(()=>{
    return {
      width:
        animation.value == 1
        ? withTiming(300,{duration:500})
        : withTiming(0, {duration:500})
    };
  });
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Animated.View style={[{backgroundColor:'#f2f2f2', width:300, height:50, borderRadius:10, alignItems:'center', flexDirection:'row'},animationStyle]}>
        <TextInput style={{width:'85%'}} placeholder='search text'/>
        <TouchableOpacity onPress={()=>{
          if(animation.value == 1) {
            animation.value = 0;
            setValue(0);
          } else {
            animation.value = 1;
            setValue(1);
          }
        }}>
            <Image source={value == 0 ? require('../../images/search.png') : require('../../images/cancel.png')} style={{width:30, height:30}}/>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

export default AnimatedSearchBar

const styles = StyleSheet.create({})