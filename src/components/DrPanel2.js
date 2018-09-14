import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';
import {Col, Row, Grid} from "react-native-easy-grid";
import {AppStyles} from '../StyleSheet';
import {MaterialIcons} from '@expo/vector-icons';

export class DrPanel2 extends Component {
  render() {
    const {title,image, desc,onPress, ...otherProps } = this.props;
    return (
      <TouchableHighlight
      underlayColor="#f1f1f1"
      onPress={onPress}
      style={AppStyles.panel2}>
      <Grid>
        <Row>
          <Col size={93}>
            <Text style={AppStyles.Panel2Heading}>{title}</Text>
            <Text style={AppStyles.Panel2Text}>{desc}</Text>
          </Col>
          <Col style={AppStyles.Panel2ContentCenter} size={7}>
            <MaterialIcons name="chevron-right" style={AppStyles.Panel2Icon}/>
          </Col>
        </Row>
      </Grid>
    </TouchableHighlight>
    )
  }
}
