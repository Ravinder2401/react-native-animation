import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {GestureHandlerRootView, PanGestureHandler} from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const ScrollAnimationGesture = () => {
    const x = useSharedValue(0);
    const y = useSharedValue(0);
    const gestureHandler = useAnimatedGestureHandler({
        onStart:(e,c)=>{
            c.startX = x.value;
            c.startY = y.value;
        },
        onActive:(e,c)=>{
            x.value = c.startX + e.translationX;
            y.value = c.startY + e.translationY;
        },
        onEnd:(e,c)=>{
            x.value = withSpring(0);
            y.value = withSpring(0);
        }
    });

    const animatedStyle = useAnimatedStyle(()=>{
        return {
            transform:[{translateX:x.value}, {translateY:y.value}]
        }
    })
  return (
    <GestureHandlerRootView>
    <View style={{flex:1}}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[{height:100, width:100, backgroundColor:'orange'},animatedStyle]}> 

        </Animated.View>
        </PanGestureHandler>
    </View>
    </GestureHandlerRootView>
  )
}

export default ScrollAnimationGesture

const styles = StyleSheet.create({})