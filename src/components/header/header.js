import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import hearderStyle from "./hearderStyle";
import Field from "../campo/Field";
import Flag from "../flag/flag";

export default props => {
    return (
        <View style={hearderStyle().container}>
            <View style={hearderStyle().flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress}
                                  style={hearderStyle().flagButton}>
                    <Flag bigger/>
                </TouchableOpacity>
                <Text style={hearderStyle().flagsLeft}>= {props.flagsLeft}</Text>
            </View>
            <TouchableOpacity onPress={props.onNewGame}
                              style={hearderStyle().button}>
                <Text style={hearderStyle().buttonLabel}>Novo Jogo</Text>

            </TouchableOpacity>
        </View>
    )
}