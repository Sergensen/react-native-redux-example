import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.onPress=this.onPress.bind(this);
  }
  onPress(){
    const { actions, value } = this.props;
    if(value==="."){
      actions.dot();
    } else {
      actions.type(value);
    }
  }
  render() {
    const { value } = this.props;
    return (
      <TouchableOpacity style={styles.button} onPress={this.onPress} title="7"><Text style={styles.text}>{value}</Text></TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ECECEC',
    padding: 10,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: "#C7C1C1"
  },
  text:{
    fontSize: 20
  }
});
