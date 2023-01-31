import React from "react";
import {Modal, Text, TouchableOpacity, View} from "react-native";
import selectorDifficultyStyle from "./SelectorDifficultyStyle";
export default props =>{
    return(
        <Modal onRequestClose={props.onCancel}
               visible={props.isVisible} animationType='slide'
               transparent={true}>
            <View style={selectorDifficultyStyle().frame}>
                <Text style={selectorDifficultyStyle().tittle}>Selecione a dificuldade</Text>
                <TouchableOpacity
                    style={[selectorDifficultyStyle().button, selectorDifficultyStyle().bgEasy]}
                    onPress={() => props.onLevelSelected(0.1)}>
                    <Text style={selectorDifficultyStyle().buttonLabel}>Fácil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[selectorDifficultyStyle().button, selectorDifficultyStyle().bgMedium]}
                    onPress={() => props.onLevelSelected(0.2)}>
                    <Text style={selectorDifficultyStyle().buttonLabel}>Médio</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[selectorDifficultyStyle().button, selectorDifficultyStyle().bgHard]}
                    onPress={() => props.onLevelSelected(0.3)}>
                    <Text style={selectorDifficultyStyle().buttonLabel}>Díficil</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}