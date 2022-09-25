import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MyButton from '../src/components/MyButton';


var { height } = Dimensions.get('window');

const SettingsScreen = () => {
  return (
  <ImageBackground source={require('../assets/fondo.png')} style={styles.back}>
    <View style={styles.container} >

      <MyButton onPress={() => alert('working')} label={'Registrar padecimientos'} rounded={'large'} size={'large'}/>
      <MyButton onPress={() => alert('working')} label={'Registro de Vacunas'} rounded={'large'} size={'large'}/>
      <MyButton onPress={() => alert('working')} label={'Estudios Clinicos'} rounded={'large'} size={'large'}/>
      <MyButton onPress={() => alert('working')} label={'Desparacitaciones'} rounded={'large'} size={'large'}/>
      <MyButton onPress={() => alert('working')} label={'Duchas'} rounded={'large'} size={'large'}/>
      <MyButton onPress={() => alert('Estas seguro de eliminar')} label={'Eliminar todo registro'} rounded={'large'} size={'large'} type={'secondary'}/>
    
    </View>
  </ImageBackground>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  back: { 
    height: height,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});