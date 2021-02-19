import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
function Button(props) {
    // console.warn(props.data)
    return (
        <View style={{alignItems: 'center',marginBottom:10 }}>
            <TouchableOpacity style={{borderWidth:1, width: '80%', height:50, borderRadius:30, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{fontWeight: 'bold', fontSize:19}}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Button;  

