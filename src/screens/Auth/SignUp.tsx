import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import React from 'react';
import vector1 from '../../assets/images/Vector1.png';
import vector2 from '../../assets/images/Vector2.png';
import defaultColor from '../../theme/color';



export default function SignUp() {
    const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  return (
    <View style={styles.container}>
        <Image source={vector1} />

        <View style={styles.headingContainer}>
              <Text>Sign up</Text>
              <Text>Create Your new account</Text>
        </View>

       

        <Image source={vector2} />
    </View>
  );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor: defaultColor.bgColor,
},

headingContainer:{
    position:'absolute',
},


});
