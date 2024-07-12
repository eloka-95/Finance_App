import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import defaultColor from './src/theme/color';
import AppNav from './src/navigaton';
import { Landingpage } from './src/screens/landingpage/Landingpage';
export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <AppNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultColor.bgColor,
  },
});
