// PaginationButton.tsx
import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import btnArrow from '../assets/icons/arrow.png';
import defaultColor from '../theme/color';
import Animated, { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';

type PaginationButtonProps = {
    flatListRef: React.RefObject<any>;
    flatListIndex: Animated.SharedValue<number>;
    dataLength: number;
};

const PaginationButton: React.FC<PaginationButtonProps> = ({ flatListRef, flatListIndex, dataLength }) => {

    const buttonAnimationStyle = useAnimatedStyle(() => {
        return {
            width: flatListIndex.value === dataLength - 1 ? withSpring(140) : withSpring(60),
            height: 60,
        };
    });

    const arrowAnimationStyle = useAnimatedStyle(() => {
        return {
            width: 30,
            height: 30,
            opacity: flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
            transform: [{ translateX: flatListIndex.value === dataLength - 1 ? withTiming(100) : withTiming(0) }],

        };
    });

    const textAnimationStyle = useAnimatedStyle(() => {
        return {
            opacity: flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),

        };
    });

    const handlePress = () => {
        if (flatListIndex.value < dataLength - 1) {
            flatListRef.current.scrollToIndex({ index: flatListIndex.value + 1 });
        } else {
            console.log('NAVIGATE TO NEXT SCREEN');
        }
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress} >
            <Animated.View style={[styles.btnContainer, buttonAnimationStyle]}>
                <Animated.Text style={[styles.btnText, textAnimationStyle]}>Get Started</Animated.Text>
                <Animated.Image source={btnArrow} style={[styles.arrow, arrowAnimationStyle]} />
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: defaultColor.btnlpurple,
        padding: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    arrow: {
        position: 'absolute',
        width: 38,
        height: 38,
    },
    btnText: {
        color: '#fff',
        position: 'absolute',
        fontSize: 16,
    },
});

export default PaginationButton;
