import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import Result from './Result'
import Input from './Input'
import Numbers from './Numbers'
import Operations from './Operations'

export default class Calc extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render() {
    return (
      <View style={styles.mainView}>
         <StatusBar hidden />
         <Result style={styles.result} />
         <Input style={styles.input} />
         <View style={styles.inputView}>
           <Numbers style={styles.numbers} />
           <Operations style={styles.operations} />
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
    backgroundColor: "red",
    flex: 3
  },
  input:{
    backgroundColor: "blue",
    flex: 2
  },
  inputView:{
    backgroundColor: "grey",
    flex: 8,
    flexDirection: "row"
  },
  numbers:{
    backgroundColor: "white",
    flex: 3
  },
  operations:{
    flex: 1
  }
});
