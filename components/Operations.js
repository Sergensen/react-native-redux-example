import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import OperationButton from './OperationButton';

const { ADD, SUB, MUL, DIV } = require('../actions/actionTypes');

export default class Operations extends Component {
  render() {
    const { style, actions, last } = this.props;
    return (
      <View style={style}>
          <OperationButton onPress={actions.div} value="/" type={DIV} last={last} />
          <OperationButton onPress={actions.mul} value="*" type={MUL} last={last} />
          <OperationButton onPress={actions.sub} value="-" type={SUB} last={last} />
          <OperationButton onPress={actions.add} value="+" type={ADD} last={last} />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  button: {
    backgroundColor: '#D4D4D4',
    padding: 10,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: "#C7C1C1"
  },
  text:{
    fontSize: 25,
    fontWeight: "bold"
  }
});
