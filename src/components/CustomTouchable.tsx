import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';

interface CustomButtonProps {
    onPress: () => void;
    position?: { top?: number; left?: number; right?: number; bottom?: number };
    fontSize?: number;
    textColor?: string;
    backgroundColor?: string;
    text: string;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
}

const CustomTouchable: React.FC<CustomButtonProps> = ({
    onPress,
    position,
    fontSize = 16,
    textColor = '',
    backgroundColor = '',
    text,
    buttonStyle,
    textStyle,

}) => {


    return (
            <TouchableOpacity
                onPress={onPress}
                style={[
                    styles.button,
                    { backgroundColor, ...position },
                    buttonStyle,
                ]}
            >
                <Text style={[styles.text, { fontSize, color: textColor }, textStyle]}>{text}</Text>
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute', // Allows positioning with top, left, etc.
    },

});

export default CustomTouchable;
