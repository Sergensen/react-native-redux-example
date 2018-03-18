import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';

export default class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state={
      input: this.props.input
    }
  }

  onPress(){
  }

  render() {
    const { style } = this.props;
    const { input } = this.state;
    return (
      <View style={style}>
        <TouchableOpacity style={styles.button} onPress={this.onPress} title="1"><Text>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.onPress} title="2"><Text>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.onPress} title="3"><Text>3</Text></TouchableOpacity>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    flex:1
  }
});
