import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Selector from '../components/Selector';

const App = ({actions, countReducer}) => (
    <Selector actions={actions} counter={countReducer.counter} />
  );

const mapStateToProps = ({countReducer}) => ({
  countReducer,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
