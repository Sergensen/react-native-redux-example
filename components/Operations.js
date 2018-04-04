import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';

export default class Operations extends Component {
  render() {
    const { style, actions } = this.props;
    return (
      <View style={style}>
          <TouchableOpacity style={styles.button} onPress={actions.div} title="/"><Text style={styles.text}>/</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={actions.mul} title="*"><Text style={styles.text}>*</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={actions.sub} title="-"><Text style={styles.text}>-</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={actions.add} title="+"><Text style={styles.text}>+</Text></TouchableOpacity>
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
