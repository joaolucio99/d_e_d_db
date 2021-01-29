import React from 'react'
import { SafeAreaView ,  
        ImageBackground , 
        Image,
        View,
        TextInput, 
        Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Locker from '../assets/icons/locker.svg'
import Mail from '../assets/icons/mail.svg'
import Key from '../assets/icons/key.svg'
import Styles from '../styles/init'

export default props => {
    return (
        <SafeAreaView style={Styles.screen}>
            <ImageBackground source={require('../assets/backgrounds/init_bcg.png')} style={Styles.background}>
                <View style={Styles.container_logo}>
                    <Image source={require('../assets/logos/init_logo.png')} style={Styles.logo}></Image>
                </View>
                <View style={Styles.container_inputs}>
                    <Mail width={20} height={20} fill={"rgba(214, 29, 9, 1)"} style={Styles.mail}></Mail>
                    <Key width={20} height={20} fill={"rgba(214, 29, 9, 1)"} style={Styles.key}></Key>
                    <TextInput
                        keyboardType={'email-address'}
                        placeholder="Login"
                        placeholderTextColor="rgba(214, 29, 9, 1)"
                        style={Styles.inputs}
                    ></TextInput>
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="rgba(214, 29, 9, 1)"
                        style={Styles.inputs}
                    ></TextInput>
                </View>
                <View style={Styles.container_buttons}>
                    <LinearGradient
                        style={Styles.button}
                        useAngle={true}
                        angle={25}
                        colors={['rgba(225, 0, 0, 0.7)', 'rgba(250, 163, 55, 0.7)']}
                        angleCenter={{x: 0.5, y: 0.5}}
                    >
                        <Locker width={20} height={20} fill={"black"}></Locker>
                        <Text style={Styles.button_font}>LOG IN</Text>
                    </LinearGradient>          
                        <Text style={Styles.sigin} onPress={()=> props.navigation.navigate("Sign_in")}>SIGN IN</Text> 
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}