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
import {Ionicons} from '@expo/vector-icons';
import {Col, Row, Grid} from "react-native-easy-grid";
import {AppStyles} from '../StyleSheet';
export class CategoryList extends Component {
  render() {
    const {
      title,
      onPress,
      ...otherProps
    } = this.props;
    return (
      <TouchableHighlight
        underlayColor="#f1f1f1"
        onPress={onPress}
        style={AppStyles.categoryContainer}>
        <Grid style={AppStyles.BorderBottom}>
          <Row style={AppStyles.CategoryPadding}>
            <Col size={95}>
              <Text style={AppStyles.CategoryHeading}>{title}</Text>
            </Col>
            <Col size={5}>
              <Ionicons style={AppStyles.CategoryListIcon} name="ios-arrow-forward-outline"/>
            </Col>
          </Row>
        </Grid>
      </TouchableHighlight>
    )
  }
}
