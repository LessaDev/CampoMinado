import React from "react";
import {StyleSheet} from "react-native";
import params from '../../Params'

export default () => StyleSheet.create({
    field:{
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#ccc',
        borderTopColor: '#ccc',
        borderRightColor: '#333',
        borderBottomColor: '#333',
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems:'center',
        justifyContent:'center'
    },
    exploded:{
        backgroundColor: 'red',
        borderColor: 'red'
    },
    label:{
        fontWeight: 'bold',
        fontSize: params.fontSize
    }
})