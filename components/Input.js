import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export default class Input extends Component {
  render() {
    const { style, input } = this.props;
    const size = input.toString().length>13?20:35;
    return (
      <View style={style}>
        <Text style={{fontSize: size, marginRight: 10}}>{input}</Text>
      </View>
    );
  }
}
