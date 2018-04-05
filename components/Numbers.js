import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import OperationButton from './OperationButton';
import Button from './Button';
const { MOD, PRO, NEG } = require('../actions/actionTypes');

export default class Numbers extends Component {
  render() {
    const { style, actions, state } = this.props;
    const clearButton = state.clear?"AC":"C";
    return (
      <View style={style}>
        <View style={styles.row}>
          <OperationButton onPress={actions.mod} last={state.last} type={MOD} value="mod" />
          <OperationButton onPress={actions.pro} type={PRO} value="%" />
          <OperationButton onPress={actions.neg} type={NEG} value="+/-" />
        </View>
        <View style={styles.row}>
          <Button actions={actions} value={7} />
          <Button actions={actions} value={8} />
          <Button actions={actions} value={9} />
        </View>
        <View style={styles.row}>
          <Button actions={actions} value={4} />
          <Button actions={actions} value={5} />
          <Button actions={actions} value={6} />
        </View>
        <View style={styles.row}>
          <Button actions={actions} value={1} />
          <Button actions={actions} value={2} />
          <Button actions={actions} value={3} />
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={actions.clear} title="C"><Text style={styles.text}>{clearButton}</Text></TouchableOpacity>
          <Button actions={actions} value={0} />
          <Button actions={actions} value={"."} />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fffa9b',
    padding: 10,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: "#C7C1C1"
  },
  text:{
    fontSize: 20
  },
  row: {
    flexDirection: "row",
    flex:1
  }
});
