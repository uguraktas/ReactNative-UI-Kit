import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import {AppStyles} from '../StyleSheet';
import {Ionicons} from '@expo/vector-icons';
export class DrInput extends Component {
  render() {
    const {
      title,
      label,
      icon,
      ...otherProps
    } = this.props;
    return (
      <View>
        <Ionicons style={AppStyles.inputIcon} name={icon} />
        <Text style={AppStyles.defaultTextInputLabel}></Text>
        <TextInput placeholderTextColor='#787878' placeholder={label} style={AppStyles.defaultTextInput}/>
      </View>
    ) 
  }
}
