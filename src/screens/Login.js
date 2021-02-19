import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Touchable, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Buttons/Button';
import Input from '../components/Input/TextInput';
import SignIn from '../components/Buttons/SignInWithGoogle';
function Login() {
    const Width  = Dimensions.get('screen').width
    const Height  = Dimensions.get('screen').height
    return (
        <View style={{ flex: 1, }}>
            <View style={{flex:5.3}}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#7F53AC', '#647DEE']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>Sign in with Facebook</Text>
                </LinearGradient>
            </View>
           
            <View style={{flex:5, backgroundColor: 'red'}}>
              
                {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#7F53AC', '#647DEE']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>Sign in with Facebook</Text>
                </LinearGradient> */}
            </View>
            <View style={{backgroundColor: 'yellow', position: 'absolute', top:Height/4, width: '95%', alignSelf: 'center', height:Height/2, borderRadius:20}}>
                <Text style={{color: 'black', alignSelf: 'center', fontWeight: 'bold', fontSize:25, padding:10}}>Sign In</Text>
                <Input data={'Enter Your Email'} icon={Entypo} name={"mail"}/>
                <Input data={'Password'} icon={Entypo} name={"key"}/>
                <TouchableOpacity style={{alignSelf:'flex-end', marginRight:10, marginBottom:10}}>
                    <Text style={{color: 'black', }}>Forget Password ?</Text>
                </TouchableOpacity>
                <Button/>
                <Text style={{alignSelf:'center'}}>OR</Text>
                <SignIn/>
            </View>
        </View>
    );
}

export default Login;
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