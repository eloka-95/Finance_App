import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, interpolate, Extrapolation } from 'react-native-reanimated';
import { OnboardingData } from './types';
import defaultColor from '../../theme/color';


interface OnboardingItemProps {
    item: OnboardingData;
    index: number;
    scrollX: Animated.SharedValue<number>;
}


const OnboardingItem: React.FC<OnboardingItemProps> = ({ item, index, scrollX }) => {
    const { width: SCREEN_WIDTH } = useWindowDimensions();

    const imageAnimationStyle = useAnimatedStyle(() => {
        const opacityAnimation = interpolate(scrollX.value, [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
        ], [0, 1, 0], Extrapolation.CLAMP);

        const translateYAnimation = interpolate(
            scrollX.value, [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
        ], [100, 0, 100], Extrapolation.CLAMP);


        return {
            opacity: opacityAnimation,
            width: SCREEN_WIDTH * 0.9,
            height: SCREEN_WIDTH * 0.8,
            transform: [{ translateY: translateYAnimation }],

        };
    });


    // text animation section
    const textAnimationStyle = useAnimatedStyle(() => {
        const opacityAnimation = interpolate(scrollX.value, [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
        ], [0, 1, 0], Extrapolation.CLAMP);

        const translateYAnimation = interpolate(
            scrollX.value, [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
        ], [100, 0, 100], Extrapolation.CLAMP);


        return {
            opacity: opacityAnimation,
            transform: [{ translateY: translateYAnimation }],

        };
    });


    return (
        <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
            <Animated.Image style={[styles.image, imageAnimationStyle]} source={item.Image} />
            <Animated.View style={[styles.textContainer, textAnimationStyle]}>
                <Text style={styles.details}>{item.details}</Text>
                <Text style={[styles.description, { width: SCREEN_WIDTH * 0.9 }]}>{item.description}</Text>
            </Animated.View>

        </View>
    );
};


const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        resizeMode: 'contain',
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    details: {
        color: defaultColor.textPurple,
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 1,
        marginBottom: 30,

    },

    description: {
        fontSize: 19,
        textAlign: 'center',
        marginTop: 10,
        flexShrink: 1,
        flexWrap: 'wrap',
        color: defaultColor.textGray,
    },
});

export default OnboardingItem;
