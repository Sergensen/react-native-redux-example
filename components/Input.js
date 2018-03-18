import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state={
      input: this.props.input
    }
  }

  render() {
    const { style } = this.props;
    const { input } = this.state;
    return (
      <View style={style}>
        <Text>{input}</Text>
      </View>
    );
  }
}
