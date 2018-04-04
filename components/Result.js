import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export default class Result extends Component {
  render() {
    const { style, result } = this.props;
    let output = result;
    if(numberOfDecimals(output)>=3){
      let temp = result.toString().split(".");
      output=temp[0]+"."+temp[1].substring(0,4)+"*10^"+(numberOfDecimals(result)-3);
    }
    let size=output.toString().length>8?35:55;
    size=output.toString().length>14?20:size;
    return (
      <View style={style}>
        <Text style={{fontSize: size}}>{output}</Text>
      </View>
    );
  }
}

const numberOfDecimals = (number) => {
    if(number.toString().includes(".")){
      const decimal = number.toString().split(".");
      return decimal[1].length;
    } else {
      return 0;
    }
}

const styles = StyleSheet.create({
  text:{
    marginRight: 10
  }
});
