import * as React from 'react';
import {Text, View, Alert} from 'react-native';


import appStyle from "../../campoMinado/src/AppStyle";
import params from "./Params";
import MineField from "./components/mineField/MineField";
import {createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed} from "./logics";

import {Component} from "react";
import Header from "./components/header/header";
import SelectorDifficulty from "./screens/selectorDifficulty/SelectorDifficulty";

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = this.createState()
    }

    minesAmount = () => {
        const cols = params.getColumnsAmount()
        const rows = params.getRowAmount()
        return Math.ceil(cols * rows * params.difficultLevel)
    }

    createState = () => {
        const cols = params.getColumnsAmount()
        const rows = params.getRowAmount()
        return {
            board: createMinedBoard(rows, cols, this.minesAmount()),
            won: false,
            lost: false,
            showLevelSelection: false,
        }
    }
    onOpenField = (row, column) =>{
        const board = cloneBoard(this.state.board)
        openField(board,row,column)
        const lost = hadExplosion(board)
        const won = wonGame(board)

        if (lost) {
            showMines(board)
            Alert.alert('You lose Playboy!!!!!')
        }

        if (won){
            Alert.alert('You Win, Nigaaa')
        }

        this.setState({board, lost,won})
    }
    onSelectField = (row, column) => {
        const board = cloneBoard(this.state.board)
        invertFlag(board, row, column)
        const won = wonGame(board)

        if(won) {
            Alert.alert('Parabéns', 'Você Venceu!')
        }
        this.setState({board,won})
    }
    onLevelSelected = level =>{
        params.difficultLevel = level
        this.setState(this.createState())
    }

    render() {
        return (
            <View style={appStyle().container}>
                <SelectorDifficulty isVisible={this.state.showLevelSelection}
                                    onLevelSelected={this.onLevelSelected}
                                    onCancel={()=> this.setState({showLevelSelection:false})}/>
                <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
                onNewGame={() => this.setState(this.createState())}
                onFlagPress={() => this.setState({ showLevelSelection: true})}/>
                <View style={appStyle().board}>
                    <MineField board={this.state.board}
                        onOpenField={this.onOpenField}
                        onSelectField={this.onSelectField}/>
                </View>
            </View>
        )

    }
}