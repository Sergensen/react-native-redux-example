import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class OperationButton extends Component {
  render() {
    const { value, onPress, last, type } = this.props;
    const styles = StyleSheet.create({
      button: {
        backgroundColor: type===last?"#ececec":"#D4D4D4",
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

    return (
      <TouchableOpacity style={styles.button} onPress={onPress} title={type}><Text style={styles.text}>{value}</Text></TouchableOpacity>
    );
  }
}
