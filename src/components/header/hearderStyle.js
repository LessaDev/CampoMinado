import React from "react";
import {StyleSheet} from "react-native";

export default () => StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",
        backgroundColor: '#EEE',
        alignItems:'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    flagContainer:{
        flexDirection: "row",
    },
    flagButton:{
        marginTop:10,
        minWidth:30,
    },
    flagsLeft:{
        fontSize:30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
    },
    button:{
        backgroundColor: '#999',
        padding: 2,
    },
    buttonLabel:{
        padding:20,
        color: '#DDD',
        borderWidth: 2,
        borderLeftColor: '#ccc',
        borderTopColor: '#ccc',
        borderRightColor: '#333',
        borderBottomColor: '#333',
        fontWeight: 'bold'
    }

})