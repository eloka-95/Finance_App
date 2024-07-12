
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

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

const CustomButton: React.FC<CustomButtonProps> = ({
    onPress,
    position,
    fontSize = 16,
    textColor = '#fff',
    backgroundColor = '#007BFF',
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
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', // Allows positioning with top, left, etc.
    },
    text: {
        fontSize: 16,
        color: '#fff',
    },
});

export default CustomButton;
