import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
function Google(props) {
    
    return (
        <View style={{alignItems: 'center',marginVertical:10 }}>
            <View style={{ borderWidth:1, borderRadius:30,width: '80%',marginBottom:10}}>
            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',height:50 }}>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight: 'bold', fontSize:19, paddingHorizontal:10}}>SIGN IN WITH {props.name}</Text>
                <Image source={require('../../assets/images/google.jpg')} style={{width:25, height:25,alignSelf: 'flex-end'}}/>
                </View>              
            </TouchableOpacity>
            </View>
            <View style={{ borderWidth:1, borderRadius:30,width: '80%',}}>
            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',height:50 }}>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight: 'bold', fontSize:19, paddingHorizontal:10}}>SIGN IN WITH {props.name2}</Text>
                <Image source={require('../../assets/images/facebook.png')} style={{width:25, height:25, alignSelf: 'flex-end'}}/>
                </View>              
            </TouchableOpacity>
            </View>
           
        </View>
    );
}

export default Google;  

