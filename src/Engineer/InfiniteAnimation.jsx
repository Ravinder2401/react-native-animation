import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated';

const InfiniteAnimation = () => {
    const animation = useSharedValue(0); // setting initial value for animation
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const runAnimation = () => {
            animation.value = withRepeat(
                withTiming(1, { duration: 500 }),
                -1, // -1 means infinite loop
                true // reverse the animation direction
            );
        };

        runAnimation();

        // Clean up function to stop the animation when the component unmounts
        return () => {
            animation.value = 0;
        };
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    // defining animation styles
    const animatedStyle = useAnimatedStyle(() => {
        // In interpolate function we pass three parameters 1- animation value, 2- input range, 3- output range (means what we are showing on the basis of input range like for 1 we display width as 100 and for 0 we display width as 200)
        const width = interpolate(animation.value, [0, 1], [100, 200]);
        const backgroundColor = interpolateColor(animation.value, [0, 1], ['orange', 'purple']);
        const borderRadius = interpolate(animation.value, [0, 1], [100, 100]);
        return {
            width: width,
            height: width,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
        };
    });

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={[{ width: 100, height: 100, backgroundColor: 'red' }, animatedStyle]} />
        </View>
    );
};

export default InfiniteAnimation;

const styles = StyleSheet.create({});
