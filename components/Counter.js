import React, { Component } from 'react';
import { Picker, TextInput, StyleSheet, View, TouchableHighlight, Text } from 'react-native';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "1"
    };
  }

  render() {
    const { container, text, button, input, buttonText } = styles;
    const { counter, actions } = this.props;
    const { value } = this.state;

    return (
      <View style={container}>
        <TouchableHighlight style={button} onPress={() => actions.countParam(value)}>
          <Text style={buttonText}>Add selected value</Text>
        </TouchableHighlight>
        <Picker
          style={input}
          selectedValue={value}
          onValueChange={(value) => this.setState({value})}>
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
        </Picker>
        <Text style={text}>{counter}</Text>
        <TouchableHighlight style={button} onPress={() => actions.reset()}>
          <Text style={buttonText}>Reset</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 500
  },
  input: {
    marginTop: 0
  },
  text: {
    height: 50,
    marginTop: 5,
    textAlign: 'center',
    fontSize: 30
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff',
    borderWidth: 1,
    borderColor: 'black'
  },
  buttonText: {
    color: 'white'
  }
});
