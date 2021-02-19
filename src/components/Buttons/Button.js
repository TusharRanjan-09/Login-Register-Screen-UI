import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
function Button() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
          <View style={{flexDirection: 'row', alignItems: 'center', borderWidth:1,borderRadius:8,height: 50, paddingHorizontal:10}}>
          <Entypo name='mail' size={28}/>
        <TextInput placeholder="Enter Your Email" style={{ width: '70%', }} placeholderTextColor='grey'/>
          </View>
           
      </View>
    );
  }

export default Button;  