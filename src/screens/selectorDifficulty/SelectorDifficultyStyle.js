import React from "react";
import {StyleSheet} from "react-native";
export default () => StyleSheet.create({
    container:{
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,

    },
    frame:{
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.6)',
    },
    tittle:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    button:{
        marginTop: 10,
        padding: 5,
    },
    buttonLabel:{
        fontSize:20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy:{
        backgroundColor: '#49b65d'
    },
    bgMedium:{
        backgroundColor: '#2765f7'
    },
    bgHard:{
        backgroundColor: '#F26337'
    }

})