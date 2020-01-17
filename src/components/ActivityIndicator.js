import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {variableStyle} from '../styles/variables';
import PropTypes from 'prop-types';
export default class FActivityIndicator extends Component {
  render() {
    const {animating} = this.props;
    return (
      <ActivityIndicator
        animating={animating}
        color={variableStyle.green}
        size="large"
      />
    );
  }
}

// 默认props
FActivityIndicator.defaultProps = {
  animating: true,
};

// props   类型要求
FActivityIndicator.propTypes = {
  animating: PropTypes.bool,
};
