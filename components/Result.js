import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render() {
    const { style } = this.props;
    return (
      <View style={style}>

      </View>
    );
  }
}