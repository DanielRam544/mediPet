import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

var { height } = Dimensions.get('window');

// var box_count = 3;
// var box_height = height / box_count;

const HomeScreen = () => {

const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/botones.png')} style={styles.back}>
    
    <Text style={styles.text}>Fiddo</Text>

    <Image style={styles.dog} source={require('../assets/dog1.png')}/>

    <View style={styles.row}>

            <View style={[styles.box, styles.box2]}>
              <TouchableOpacity style={[styles.touchOpac, styles.back]}>
                <ImageBackground source={require('../assets/jeri.png')}>
                  <Text onPress={()=> navigation.navigate("Stack")} style= {[styles.textButton]}></Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={[styles.box]}>
              <TouchableOpacity style={[styles.touchOpac, styles.back]}>
                  <ImageBackground source={require('../assets/hue.png')}>
                    <Text onPress={()=> navigation.navigate("Stack")} style= {[styles.textButton]}></Text>
                  </ImageBackground>
              </TouchableOpacity>
            </View>
            
            <View style={[styles.box, styles.box3]}>
              <TouchableOpacity style={[styles.touchOpac, styles.back]}>
                  <ImageBackground source={require('../assets/cora.png')}>
                    <Text onPress={()=> navigation.navigate("Stack")} style= {[styles.textButton]}></Text>
                  </ImageBackground>
              </TouchableOpacity>
            </View>

      
    </View>

  </ImageBackground>
  );
}

export default HomeScreen;

 
const styles = StyleSheet.create({
  back: {
    width: '100%', 
    height: '100%'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 40,
    textAlign: 'center'
  },
  dog: {
    width: 400, 
    height: 400,
    resizeMode : 'center',
    //tintColor: "#000000",
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,  
  },
  box: {
    flex: 1,
    height: 100,
    backgroundColor: '#333',
    borderRadius: 40
  },
  box2: {
    backgroundColor: 'green'
  },
  box3: {
    backgroundColor: 'orange'
  },
  textButton: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    // paddingTop: 40,
  },
  touchOpac: {
    padding: 10,
    marginTop: '20%',
    width: '50%',
    alignSelf: 'center',
    borderRadius: 10,
  }
});