import {StyleSheet , Dimensions} from 'react-native'

export default StyleSheet.create({
    screen: {
        top:-50,
        alignItems:'center',
        justifyContent:'center'
    },
    background: {
        resizeMode: "cover",
        justifyContent: "center",
        width:'100%',
        height:'100%'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container_arrow: {
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        margin:10,
        right:170
    },
    container_input: {
        top:-10,
        alignItems:'center',
        justifyContent:'center',
    },
    single_container_input: {
        marginBottom:10
    },
    container_avatar: {
        top:10,
        borderRadius:100,
        borderColor:'white',
        borderWidth:2,
        alignItems:'center',
    },
    container_checkbox: {
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center'
    },
    avatar_text: {
        top:20,
        fontSize:14,
        textDecorationLine:'underline',
        color:'white'
    },
    inputs_text: {
        fontSize:16,
        color:'white',
        flexDirection:'row',
        justifyContent:'flex-start',
        left:8
    },
    button_font: {
        padding:5,
        fontWeight: 'bold',
        fontSize: 16
    },
    error_text:{
        padding:5,
        paddingTop:10,
        fontSize: 14,
        textAlign:'center'
    },  
    close_text:{
        textDecorationLine:'underline',
        paddingTop:10
    },
    modalView: {
        margin: 20,
        height: Dimensions.get('window').width / 1,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        justifyContent:'space-between',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalViewError: {
        margin: 20,
        width: 250,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        justifyContent:'space-between',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    button: {
        flexDirection:'row',
        height:40,
        width:160,
        top: 20,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "rgba(0, 0, 0, 1)",
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'black'
    },
    inputs: {
        margin:8,
        height:40,
        width:280,
        padding: 12,
        paddingLeft: 15,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "rgba(0, 0, 0, 0.8)",
        color:'black',
        backgroundColor: 'rgba(215, 217, 212, 0.5)'
    },
    eye_input: {
        position:'absolute',
        top:37.5,
        left:250
    },
    checkbox:{
        marginLeft:-15,
        paddingRight:35
    }
})

