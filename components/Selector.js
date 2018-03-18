import React, { Component } from 'react';
import { StyleSheet, View, SegmentedControlIOS } from 'react-native';
import Counter from './Counter';
import Map from './Map';

export default class Selector extends Component {
  constructor(props) {
    super(props);
    this.state={
      selected: 0
    }
  }

  render() {
    const { container, selector } = styles;
    const { actions, counter } = this.props;
    const { selected } = this.state;
    const view = selected===0?(<Counter counter={counter} actions={actions} />):(<Map actions={actions} />);
    return (
      <View>
        <SegmentedControlIOS
          style={selector}
          values={['Counter', 'Map']}
          selectedIndex={0}
          onChange={(event) => {
            this.setState({selected: event.nativeEvent.selectedSegmentIndex});
          }}
        />
        <View style={container}>
          {view}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  selector: {
    top: 50
  }
});
