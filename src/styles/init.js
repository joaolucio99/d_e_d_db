import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: "column"
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        paddingTop:80
    },
    container_logo: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container_inputs: {
        flex:3,
        alignItems: 'center',
    },
    container_buttons: {
        flexGrow:1,
        alignItems:'center',
    },
    logo: {
        height: 100,
        width: 100,
    },
    inputs: {
        margin:8,
        height:40,
        width:280,
        padding: 12,
        paddingLeft: 35,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "rgba(214, 29, 9, 0.8)",
        color:'white',
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    button: {
        flexDirection:'row',
        height:40,
        width:125,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "rgba(0, 0, 0, 1)",
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'black'
    },
    button_font: {
        padding:5,
        fontWeight: 'bold',
        fontSize: 16
    },
    sigin: {
        paddingTop: 10,
        textDecorationLine: 'underline',
        color:'white'
    },
    mail: {
        marginRight:243,
        top:57
    },
    key: {
        marginRight:243,
        top:93
    }
})

