import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state={
      result: this.props.result
    }
  }

  render() {
    const { style } = this.props;
    const { result } = this.state;
    return (
      <View style={style}>
        <Text>{result}</Text>
      </View>
    );
  }
}
