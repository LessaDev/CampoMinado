import React from "react";
import {View} from "react-native";
import Field from "../campo/Field";
import mineFieldStyle from "./MineFieldStyle";

export default props => {

    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c}
                onOpen={() => props.onOpenField(r,c)}
                onSelect={e => props.onSelectField(r,c)}/>
        })
        return <View key={r} style={{flexDirection: 'row'}}>{columns}</View>
    })
    return <View style={mineFieldStyle().container}>{rows}</View>
}