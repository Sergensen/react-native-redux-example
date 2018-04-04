import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export default class Result extends Component {
  render() {
    const { style, result } = this.props;
    return (
      <View style={style}>
        <Text style={styles.text}>{result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    fontSize: 55,
    marginRight: 10
  }
});
