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
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={this.onPress} title="7"><Text style={styles.text}>7</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress} title="8"><Text style={styles.text}>8</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress} title="9"><Text style={styles.text}>9</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={this.onPress} title="4"><Text style={styles.text}>4</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress} title="5"><Text style={styles.text}>5</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress} title="6"><Text style={styles.text}>6</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={this.onPress} title="1"><Text style={styles.text}>1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress} title="2"><Text style={styles.text}>2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress} title="3"><Text style={styles.text}>3</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={this.onPress} title="C"><Text style={styles.text}>C</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress} title="0"><Text style={styles.text}>0</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress} title="."><Text style={styles.text}>.</Text></TouchableOpacity>
        </View>
      </View>

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
  },
  row: {
    flexDirection: "row",
    flex:1
  }
});
