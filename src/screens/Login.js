import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Touchable, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Buttons/Button';
import Input from '../components/Input/TextInput';
import SignIn from '../components/Buttons/SignInWithGoogle';

function Login({navigation}) {
    const Width = Dimensions.get('screen').width
    const Height = Dimensions.get('screen').height
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 5.3 }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#4a21b2', '#6519a0',]} style={styles.linearGradient}>
                <Text style={{color: 'white', fontSize:35, fontWeight: 'bold', alignSelf: 'center', paddingTop:70}}>Welcome to Sign In</Text>
                </LinearGradient>
   
            </View>
            <View style={{ flex: 5, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', top: 330, justifyContent: 'center' }}>
                    <Text style={{fontSize:15}}>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
                        <Text style={{fontWeight: 'bold',fontSize:15}}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ backgroundColor: 'white', position: 'absolute', top: Height / 5, width: '90%', alignSelf: 'center', height: Height / 1.82, borderRadius: 20, elevation: 10 }}>
                <Text style={{ color: '#4a21b2', alignSelf: 'center', fontWeight: 'bold', fontSize: 25, padding: 10 }}>Sign In</Text>
                <Input data={'Enter Your Email'} icon={Entypo} name={"mail"} />
                <Input data={'Password'} icon={Entypo} name={"key"} />
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 10, marginBottom: 10 }}>
                    <Text style={{ color: 'black', }}>Forget Password ?</Text>
                </TouchableOpacity>
                <Button />
                <Text style={{ alignSelf: 'center' }}>OR</Text>
                <SignIn name="GOOGLE" name2="FACEBOOK" />


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