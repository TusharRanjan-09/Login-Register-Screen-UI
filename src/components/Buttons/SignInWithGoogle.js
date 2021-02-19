import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
function Google(props) {
    // console.warn(props.data)
    return (
        <View style={{alignItems: 'center',marginBottom:10 }}>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{width: '80%',justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{fontWeight: 'bold', fontSize:19}}>SIGN IN WITH GOOGLE</Text>
            </TouchableOpacity>
            </View>
           
        </View>
    );
}

export default Google;  

