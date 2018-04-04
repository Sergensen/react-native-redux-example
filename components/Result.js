import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export default class Result extends Component {
  render() {
    const { style, result } = this.props;
    const size=result.toString().length>9?20:50;
    return (
      <View style={style}>
        <Text style={{fontSize: size, marginRight: 10}}>{result}</Text>
      </View>
    );
  }
}
