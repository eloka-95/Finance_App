import React from 'react';
import { StyleSheet, useWindowDimensions, View, Image } from 'react-native';
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedRef, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import data from '../../data/onboardingscreendata';
import { OnboardingData } from './types';
import defaultColor from '../../theme/color';
import OnboardingItem from './OnboardingItem';
import Pagination from '../../components/Pagination';
import PaginationButton from '../../components/PaginationButton';
import vector1 from '../../assets/images/Vector1.png';
import vector2 from '../../assets/images/Vector2.png';
import CustomTouchable from '../../components/CustomTouchable';

const OnboardingScreen = ({navigation}) => {
    // const { width: SCREEN_WIDTH } = useWindowDimensions();
    const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

    const flatListRef = useAnimatedRef(null);
    const flatListIndex = useSharedValue(0);
    const scrollX = useSharedValue(0);

    // this logic keeps track when the viewable itme changes
    const onViewableItemsChanged = ({ viewableItems }) => {
        flatListIndex.value = viewableItems[0].index;
    };

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollX.value = event.contentOffset.x;
        },
    });

    const keyExtractor = (item: OnboardingData) => item.id.toString();

    const arrowAnimationStyle = useAnimatedStyle(() => {
        return {
            opacity: flatListIndex.value === data.length - 1 ? withTiming(0) : withTiming(1),
            transform: [{ translateX: flatListIndex.value === data.length - 1 ? withTiming(1) : withTiming(0) }],

        };
    });

    return (

        <View style={styles.container}>
            <Image source={vector1} />

            <Animated.View style={[arrowAnimationStyle, styles.skipButtonContainer, { width: SCREEN_WIDTH }]}>
                <CustomTouchable
                    text="Skip"
                    onPress={() => console.log('Skip Pressed')}
                    fontSize={17}
                    textColor='#6948AA'
                    position={{ left: 330, top: 20 }} // Pass the position prop here
                />
            </Animated.View>

            <View style={styles.OnboardingItem}>
                <Animated.FlatList
                    ref={flatListRef}
                    data={data}
                    renderItem={({ item, index }) => (
                        <OnboardingItem item={item} index={index} scrollX={scrollX} />
                    )}
                    keyExtractor={keyExtractor}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                    onViewableItemsChanged={onViewableItemsChanged}
                />
            </View>


            <View style={styles.paginationContainer} >
                <View>
                    <Pagination data={data} x={scrollX} screenWidth={SCREEN_WIDTH} />

                </View>

                <View style={styles.PaginationBtnContainer} >

                    <PaginationButton
                        flatListRef={flatListRef}
                        flatListIndex={flatListIndex}
                        dataLength={data.length}
                    />
                </View>
            </View>

            <Image source={vector2} style={styles.vector2} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: defaultColor.bgColor,
    },

    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 80,
        marginVertical: 530,
        position: 'absolute',
        top: 190,
        left: 10,
        transform: [{ translateX: -25 }, { translateY: -30 }], // Adjust values as needed
        zIndex: 10, // Add zIndex here

    },

    OnboardingItem: {
        position: 'absolute',
        top: 170,
        left: 0,
        right: 0,
        transform: [{ translateX: 0 }, { translateY: -30 }], // Adjust translateX and translateY to balance
        justifyContent: 'center',
        alignItems: 'center',
    },

    vector2: {
        position: 'absolute',
        top: 420,
        left: 4,
        transform: [{ translateX: 0 }, { translateY: -10 }], // Adjust translateX and translateY to balance
        zIndex: 1, // Ensure this has a lower zIndex

    },

    PaginationBtnContainer: {
        marginHorizontal: 80,
    },

    skipButtonContainer: {
        position: 'absolute',

    },

});

export default OnboardingScreen;
