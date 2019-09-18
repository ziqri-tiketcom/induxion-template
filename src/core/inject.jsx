import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';

import * as Action from '../redux/actions';

const HOCComponent = (Component) => {
  // Map state to props
  let mapStateToProps = state => state;

  if (Component.getStates) {
    const states = Component.getStates;

    mapStateToProps = mapState => {
      const props = {};

      Object.keys(states).map(state => {
        props[state] = get(mapState, `${states[state]}`);
      });

      return props;
    };
  }

  // Map dispatch to props
  let mapDispatchToProps = undefined;

  if (Component.getActions) {
      const actions = Component.getActions;

      mapDispatchToProps = dispatch => {
          const props = {};
          actions.forEach(action => props[action] = (...args) => dispatch(Action[action](...args)))
          return props;
      };
  }

  class MainComponent extends React.Component {
    render = () => (<Component {...this.props} />);
  };

  return connect(mapStateToProps, mapDispatchToProps)(MainComponent);
};
export default HOCComponent;