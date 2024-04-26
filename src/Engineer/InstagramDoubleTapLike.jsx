import { Dimensions, ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withDecay, withDelay, withSpring, runOnJS } from 'react-native-reanimated';
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler';

const InstagramDoubleTapLike = () => {
    const [count,setCount] = useState(0);
    const bgImage = {uri:'https://img.freepik.com/premium-photo/beautiful-background-nightly-sky-full-moon-background-banner-hd_976373-12707.jpg?w=1060'};

    // like this we create any type of component 
    const ImageComponent = Animated.createAnimatedComponent(Image);

    const scale = useSharedValue(0);

    // doubleTap function to scale up and down of heart image when user double tab on image background.
    const doubleTap = useCallback(()=> {
        scale.value = withSpring(1,undefined, isFinished => {
            if(isFinished) {
                scale.value = withDelay(100, withSpring(0));
                //By using runOnJS(setCount)(count + 1), you're ensuring that the setCount function is called properly within the Reanimated animation function.
                runOnJS(setCount)(count + 1)
            }
        })
    },[count])

    // style for animation
    const animatedStyle = useAnimatedStyle(()=>{
        return {
            transform:[{scale:Math.max(scale.value, 0)}]
        }
    })


  return (
    <GestureHandlerRootView>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <TapGestureHandler maxDelayMs={5000} numberOfTaps={2} onActivated={doubleTap}>
      <Animated.View>
        <ImageBackground
        source={bgImage}
        style={{
            width:Dimensions.get('window').width,
            height:200,
            justifyContent:'center', alignItems:'center'
        }}
        >
            <ImageComponent source={require('../../images/heart-like.png')} style={[{height:80,width:80, tintColor:'white'},animatedStyle]}/>
        </ImageBackground>
      </Animated.View>
      </TapGestureHandler>
    <Text style={{marginVertical:10, fontSize:16, fontWeight:'bold'}}>{count}</Text>
    </View>
    </GestureHandlerRootView>
  )
}

export default InstagramDoubleTapLike

const styles = StyleSheet.create({})