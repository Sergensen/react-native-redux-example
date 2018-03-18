import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Calc from '../components/Calc';

const App = ({actions, calc}) => (
    <Calc actions={actions} state={calc} />
  );

const mapStateToProps = ({calc}) => ({
  calc,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
