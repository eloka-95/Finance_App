import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import vector1 from '../../assets/images/Vector1.png';
import defaultColor from '../../theme/color';







export default function Layout() {
    return (
        <View style={styles.container}>
            {/* <Image source={vector1} /> */}
            <Text>Welcome to React Native</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:defaultColor.bgColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
