import React from 'react';
import { ImageBackground, StyleSheet, Text, Image, View } from 'react-native';

const AlimentoScreen = () => {
  return (
    <ImageBackground style={styles.back} source={require('../assets/fondo.png')}>
      <Text
      style={{
        fontSize: 30,
        textAlign: 'center',
        margin: '20%'
      }}
      >AlimentoScreen</Text>
    </ImageBackground>
  );
}

export default AlimentoScreen;

const styles = StyleSheet.create({
  back: {
    width: '100%', 
    height: '100%'
  }
})