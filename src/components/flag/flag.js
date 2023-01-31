import React from "react";
import {View} from "react-native";
import flagStyle from "./flagStyle";

export default props => {
    return(
        <View style={flagStyle().container}>
            <View style={[flagStyle().flagPole, props.bigger ? flagStyle().flagPoleBigger : null]}/>
            <View style={[flagStyle().flag, props.bigger ? flagStyle().flagBigger: null]}/>
            <View style={[flagStyle().base1, props.bigger ? flagStyle().base1Bigger : null]}/>
            <View style={[flagStyle().base2, props.bigger ? flagStyle().base2Bigger : null]}/>
        </View>
    )
}