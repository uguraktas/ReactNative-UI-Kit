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

export class DrPanel3 extends Component {
  render() {
    const {
      title,
      desc,
      image,
      onPress,
      ...otherProps
    } = this.props;
    return (
      <TouchableHighlight
        underlayColor="#f1f1f1"
        onPress={onPress}
        style={AppStyles.panel3}>
        <Grid>
          <Row>
            <Col size={25}>
              <Image style={AppStyles.Panel3Image} source={image}/>
            </Col>
            <Col size={68}>
              <Text style={AppStyles.Panel3Heading}>{title}</Text>
              <Text style={AppStyles.Panel3Text}>{desc}</Text>
            </Col>
            <Col style={AppStyles.Panel3ContentCenter} size={7}>
              <MaterialIcons name="chevron-right" style={AppStyles.Panel3Icon}/>
            </Col>
          </Row>
        </Grid>
      </TouchableHighlight>
    )
  }
}
