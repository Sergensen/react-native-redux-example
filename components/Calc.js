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
    backgroundColor: "#ECECEC",
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderWidth: 0.3,
    borderColor: "#C7C1C1"
  },
  input:{
    backgroundColor: "#FDFDFD",
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  inputView:{
    backgroundColor: "#8B6CFF",
    flex: 8,
    flexDirection: "row"
  },
  numbers:{
    backgroundColor: "#8B6CFF",
    flex: 3
  },
  operations:{
    flex: 1,
  }
});
