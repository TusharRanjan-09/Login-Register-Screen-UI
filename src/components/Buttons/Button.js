import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
function Button(props) {
    return (
        <View style={{alignItems: 'center',marginBottom:10, }}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[ '#3827b2','#6c18a4',]} style={{width: '80%',borderRadius:30}} >
            <TouchableOpacity style={{ height:50, borderRadius:30, justifyContent: 'center', alignItems: 'center', }} >          
            <Text style={{fontWeight: 'bold', fontSize:19, color: 'white' ,}}  >LOGIN</Text>             
            </TouchableOpacity>
            </LinearGradient>  
        </View>
    );
}
export default Button;  
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        height: 10
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});