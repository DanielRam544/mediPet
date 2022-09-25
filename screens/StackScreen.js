import React from 'react';
import { ImageBackground, StyleSheet, Text, Image, View } from 'react-native';

const StackScreen = () => {
  return (
    <ImageBackground style={styles.back} source={require('../assets/fondo.png')}>
      <View>
      <Image style={styles.img} source={require('../assets/CALE.png')}></Image>
      </View>
    </ImageBackground>
  );
}

export default StackScreen;

const styles = StyleSheet.create({
  back: {
    width: '100%', 
    height: '100%'
  },
  img: {
    width: 400,
    height: '50%',
    resizeMode : 'center',

  }
})