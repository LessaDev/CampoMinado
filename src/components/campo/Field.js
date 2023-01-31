import React from "react";
import {Text, TouchableWithoutFeedback, View,} from "react-native";
import fieldStyle from "./FieldStyle";

import Mine from "../mina/mine";
import Flag from "../flag/flag";


export default props => {
    const {mined, opened, nearMines, exploded, flagged } = props

    const styleField = [fieldStyle().field]
    if(opened) styleField.push(fieldStyle().opened)
    if(exploded) styleField.push(fieldStyle().exploded)
    if(flagged) styleField.push(fieldStyle().flagged)
    if(!opened && !exploded) styleField.push(fieldStyle().regular)


    let color = null
    if(nearMines > 0){
        if (nearMines === 1) color = '#2a28d7'
        if (nearMines === 2) color = '#2b520f'
        if (nearMines > 2 && nearMines <6) color = '#f9060a'
        if (nearMines >= 6) color = '#f221a9'
    }

    return (
        <TouchableWithoutFeedback onPress={props.onOpen}
        onLongPress={props.onSelect}>
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ?
                    <Text style={[styleField.label, {color: color }]}>
                        {nearMines} </Text> : false}
                {mined && opened ? <Mine /> : false}
                {flagged && !opened ? <Flag/> : false}
            </View>
        </TouchableWithoutFeedback>
    )
}