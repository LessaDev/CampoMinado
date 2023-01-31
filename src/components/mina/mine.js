import React from "react";
import {ImageBackground, View} from "react-native";
import minesStyle from "./minesStyle";
import img from "../../img/dinamite.png"

export default props => {
    return(
        <View style={minesStyle.container}>
            <View style={minesStyle().coreMine}>
                <ImageBackground source={img} resizeMode="center" style={minesStyle().coreMine}/>
             </View>
        </View>
    )
}