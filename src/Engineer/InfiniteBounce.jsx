import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withSpring, withTiming } from 'react-native-reanimated';

const InfiniteBounce = () => {
    const animation = useSharedValue(0); // setting initial value for animation
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const runAnimation = () => {
            animation.value = withRepeat(
                withSequence(
                    withSpring(1, { damping: 2, stiffness: 100 }),
                    withSpring(0, { damping: 2, stiffness: 100 })
                ),
                -1 // -1 means infinite loop
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
        const backgroundColor = interpolateColor(animation.value, [0, 0.5, 1], ['red', 'green', 'blue']);
        const borderRadius = interpolate(animation.value, [0, 1], [0, 100]);
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

export default InfiniteBounce;

const styles = StyleSheet.create({});
