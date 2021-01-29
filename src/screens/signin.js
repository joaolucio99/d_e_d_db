import React , {useState } from 'react'
import { View , 
         SafeAreaView , 
         FlatList,
         Text,
         Modal, 
         Image,
         TextInput, 
         ImageBackground} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { ListItem } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import users_img from '../assets/profiles/__all__'
import Left_arrow from '../assets/icons/left-arrow.svg'
import Eye from '../assets/icons/eye.svg'
import Exclam from '../assets/icons/exclamation.svg'
import Styles from '../styles/signin'


export default props => {

    const [imgChoice , setImage] = useState(users_img[0].url)
    const [nickname , setNick] = useState("")
    const [mail , setMail] = useState("")
    const [psw , setPsw] = useState("")
    const [psw_check , setPswchk] = useState("")

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [modalVisible, setModalVisible] = useState(false)
    const [modalVisibleError, setModalVisibleError] = useState(false)
    const [pswVisible , setPswVisible] = useState(true)
    const [eyeColor , setEyeColor] = useState("rgba(56, 56, 56, 1)")

    function getImages({ item: imgs}){
        return (
            <ListItem key={imgs.id} onPress={() => {
                setImage(users_img[imgs.id-1].url)
                setModalVisible(false)
                }}>
                <Image source={{uri: imgs.url}} style={{height:100 , width:100}} ></Image>
            </ListItem>
        )
    }

    function checkVisPsw(){
        if(eyeColor === 'white'){
            setEyeColor('rgba(56, 56, 56, 1)')
            setPswVisible(true)
        } else {
            setEyeColor('white')
            setPswVisible(false)
        }
    }

    function checkMail( mail ){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( mail )
    }

    function checkInfos( mail , psw , psw_check , toggleCheckBox ){
        if(checkMail(mail)===false) return 1
        else if(psw_check==="" || psw==="" || psw_check==psw===false || psw.length<6) return 2
        else if(toggleCheckBox===false) return 3
        else return 0
    }

    function initCheck( mail , psw , psw_check , toggleCheckBox){
        let res = checkInfos( mail , psw , psw_check , toggleCheckBox )
        if(res!=0) setModalVisibleError(true)
    }

    function showError ( mail , psw , psw_check , toggleCheckBox ) {
        let res = checkInfos( mail , psw , psw_check , toggleCheckBox )
            if(res===1){
                return (
                    <Text style={Styles.error_text}><Text style={{fontWeight: "bold"}}>Invalid email</Text>, check your email is correct and try again.</Text>
                )
            } else if(res===2){
                return (
                    <Text style={Styles.error_text}><Text style={{fontWeight: "bold"}}>Invalid password</Text>, your passwords do not match or reach the minimum number of characters.</Text>
                )
            } else if(res===3){
                return (
                    <Text style={Styles.error_text}>You did not agree with the terms and conditions and privacy policy</Text>
                )
            }
    }
    

    return (
        <>
            <SafeAreaView>
                <ImageBackground source={require('../assets/backgrounds/init_bcg.png')} style={Styles.background}>
                    <View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            setModalVisible(false)
                            }}
                        >
                            <View style={Styles.centeredView}>
                                <View style={Styles.modalView}>
                                    <FlatList
                                        data={users_img}
                                        keyExtractor={users_img => users_img.id.toString()}
                                        renderItem={getImages}
                                        numColumns={2}
                                    ></FlatList>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisibleError}
                            onRequestClose={() => {
                            setModalVisibleError(false)
                            }}
                        >
                            <View style={Styles.centeredView}>
                                <View style={Styles.modalViewError}>
                                    <Exclam width={25} height={25} fill={"rgba(0, 0, 0, 1)"}></Exclam>
                                    {showError( mail , psw , psw_check , toggleCheckBox )}
                                    <Text 
                                        style={Styles.close_text}
                                        onPress={()=>setModalVisibleError(false)}    
                                    >Return</Text>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <View style={Styles.screen}>
                        <View style={Styles.container_arrow}>
                            <Left_arrow width={25} height={25} fill={"rgba(255, 255, 255, 1)"} onPress={()=> props.navigation.navigate("Init")}></Left_arrow>
                        </View>
                        <View style={Styles.container_avatar}>
                            <Image source={{uri: imgChoice}} style={{height:125 , width:125}}></Image>
                        </View>
                        <Text 
                            style={Styles.avatar_text}
                            onPress={() => {setModalVisible(true)}}
                        >Change icon</Text>
                    </View>
                    <View style={Styles.container_input}>
                        <View style={Styles.single_container_input}>
                            <Text style={Styles.inputs_text}>Nickname: </Text>
                            <TextInput
                                keyboardType={'default'}
                                onChangeText={nickname => setNick(nickname)}
                                placeholder="Create Nickname, max 16"
                                maxLength={16}
                                placeholderTextColor="rgba(56, 56, 56, 1)"
                                style={Styles.inputs}
                            ></TextInput>
                        </View>
                        <View style={Styles.single_container_input}>
                            <Text style={Styles.inputs_text}>Email: </Text>
                            <TextInput
                                keyboardType={'email-address'}
                                onChangeText={mail => setMail(mail)}
                                placeholder="Valid Email"
                                placeholderTextColor="rgba(56, 56, 56, 1)"
                                style={Styles.inputs}
                            ></TextInput>
                        </View>
                        <View style={Styles.single_container_input}>
                            <Text style={Styles.inputs_text}>Password: </Text>
                            <TextInput
                                keyboardType={'default'}
                                onChangeText={psw => setPsw(psw)}
                                secureTextEntry={pswVisible}
                                placeholder="Max 16, Min 6"
                                maxLength={16}
                                placeholderTextColor="rgba(56, 56, 56, 1)"
                                style={Styles.inputs}
                            ></TextInput>
                            <Eye width={23} height={23} fill={eyeColor} style={Styles.eye_input} onPress={()=>checkVisPsw()}></Eye>
                        </View>
                        <View style={Styles.single_container_input}>
                            <Text style={Styles.inputs_text}>Check password:</Text>
                            <TextInput
                                keyboardType={'default'}
                                onChangeText={psw_check => setPswchk(psw_check)}
                                secureTextEntry={pswVisible}
                                placeholder="Check Your Password"
                                maxLength={16}
                                placeholderTextColor="rgba(56, 56, 56, 1)"
                                style={Styles.inputs}
                            ></TextInput>
                            <Eye width={23} height={23} fill={eyeColor} style={Styles.eye_input} onPress={()=>checkVisPsw()}></Eye>
                        </View>
                        <View style={Styles.container_checkbox}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                tintColors={{ true: '#F15927', false: 'white' }}
                                style={{color:'white'}}>
                            </CheckBox>
                            <Text style={{color:'white'}}>I agree to the 
                                <Text
                                    style={{color:'rgba(23, 189, 242, 1)'}}            
                                > Terms & Conditions</Text>
                                {"\n"}and 
                                <Text
                                    style={{color:'rgba(23, 189, 242, 1)'}}
                                > Privacy Policy</Text>
                            </Text>
                        </View>
                        <LinearGradient
                            style={Styles.button}
                            useAngle={true}
                            angle={25}
                            colors={['rgba(225, 0, 0, 0.7)', 'rgba(250, 163, 55, 0.7)']}
                            angleCenter={{x: 0.5, y: 0.5}}
                        >
                        <Text 
                            style={Styles.button_font} 
                            onPress={ () => initCheck(mail , psw , psw_check, toggleCheckBox)}>CREATE ACCOUNT</Text>
                        </LinearGradient> 
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </>
    )
}