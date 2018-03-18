import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import Result from './Result'
import Input from './Input'
import Numbers from './Numbers'
import Operations from './Operations'

export default class Calc extends Component {
  render() {
    const { actions, state } = this.props;
    return (
      <View style={styles.mainView}>
         <StatusBar hidden />
         <Result result={state.result} style={styles.result} />
         <Input input={state.input} style={styles.input} />
         <View style={styles.inputView}>
           <Numbers actions={actions} input={state.input} style={styles.numbers} />
           <Operations actions={actions} style={styles.operations} />
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  },
  result:{
    backgroundColor: "#898989",
    flex: 3
  },
  input:{
    backgroundColor: "#a8a8a8",
    flex: 2
  },
  inputView:{
    backgroundColor: "grey",
    flex: 8,
    flexDirection: "row"
  },
  numbers:{
    backgroundColor: "#3a3a3a",
    flex: 3
  },
  operations:{
    flex: 1
  }
});
