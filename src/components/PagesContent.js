import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, StyleSheet, TouchableHighlight, Text} from 'react-native';
import _ from 'lodash';

import {AppStyles} from '../StyleSheet';
import {Ionicons} from '@expo/vector-icons';
export class DrButton extends Component {
  render() {
    const {
      title,
      onPress,
      BtType,
      ...otherProps
    } = this.props;
    let uStyle = AppStyles.darkButton;
    switch (BtType) {
      case 'buttonDanger':
        uStyle = AppStyles.buttonDanger;
        break;
      case 'buttonWarning':
        uStyle = AppStyles.buttonWarning;
        break;
      case 'buttonSecondary':
        uStyle = AppStyles.buttonSecondary;
        break;
      case 'buttonSuccess':
        uStyle = AppStyles.buttonSuccess;
        break;
      case 'buttonLight':
        uStyle = AppStyles.buttonLight;
        break;
      case 'buttonDark':
        uStyle = AppStyles.buttonDark;
        break;
      default:
        break;
    }
    return (
      <TouchableHighlight onPress={onPress}>
        <Text style={[AppStyles.defaultButton, uStyle]}>{title}</Text>
      </TouchableHighlight>
    )
  }
}

// Bu Nedir ?
DrButton.propTypes = {
  title: PropTypes.string.isRequired
};