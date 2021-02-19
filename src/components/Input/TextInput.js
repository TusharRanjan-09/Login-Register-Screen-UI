import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
function Input(props) {
    
    return (
        <View style={{alignItems: 'center',marginBottom:10 }}>
            <View style={{ flexDirection: 'row',alignItems: 'center', borderWidth: 1, borderRadius: 8, height: 50, paddingHorizontal: 10 }}>
                <Entypo name={props.name} size={28} />
                <TextInput placeholder={props.data} style={{ width: '70%', }} placeholderTextColor='grey' secureTextEntry={props.in}/>
            </View>
        </View>
    );
}

export default Input;  

