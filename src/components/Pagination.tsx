import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import defaultColor from '../theme/color';
import Animated, {
    Extrapolation,
    SharedValue,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';

type PaginationCompProps = {
    index: number;
    x: SharedValue<number>;
    screenWidth: number;
};

function Pagination({ data, x, screenWidth }: PaginationCompProps) {
    
    const PaginationComp = ({i}) => {
        const animatedDotStyle = useAnimatedStyle(() =>{
            const widthAnimation = interpolate(
                x.value,
                [
                    (i - 1) * screenWidth, i * screenWidth, (i + 1) * screenWidth,
                ],
                [10, 20, 10],
                Extrapolation.CLAMP,
            );
            const opacityAnimation = interpolate(
                x.value,
                [
                    (i - 1) * screenWidth, i * screenWidth, (i * 1) * screenWidth,
                ],
                [0.5, 1, 0],
                Extrapolation.CLAMP,
            );
            
            
            return {
                width:widthAnimation,
                opacity:opacityAnimation,
            }
        });
        return <Animated.View style={[styles.dots, animatedDotStyle]}></Animated.View>;
    }

    return (
        <View style={styles.paginationContainer}>
            {data.map((_, i) =>{
                return <PaginationComp i={i}  key={i} />;
            })}
        </View>
    );
}

export default Pagination;

const styles = StyleSheet.create(
    {
        paginationContainer : {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
        },

        dots:{
            width:10,
            height:10,
            backgroundColor: defaultColor.btnlpurple,
            marginHorizontal:10,
            borderRadius:5,
        },
    }
);
