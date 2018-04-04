import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export default class Input extends Component {
  render() {
    const { style, input } = this.props;
    return (
      <View style={style}>
        <Text style={styles.text}>{input}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    fontSize: 35,
    marginRight: 10
  }
});
