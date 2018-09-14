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
import {Ionicons} from '@expo/vector-icons';

export class DrPanel extends Component {
  render() {
    const {
      title,
      image,
      desc,
      onPress,
      ...otherProps
    } = this.props;
    return (
      <TouchableHighlight
        underlayColor="#f1f1f1"
        onPress={onPress}
        style={[AppStyles.panel,AppStyles.BorderBottom]}>
        <Grid >
          <Row>
            <Col size={25}>
              <Image style={AppStyles.PanelImage} source={image}/>
            </Col>
            <Col size={70}>
              <Text style={AppStyles.PanelHeading}>{title}</Text>
              <Text style={AppStyles.PanelText}>{desc}</Text>
            </Col>
            <Col style={AppStyles.PanelContentCenter} size={5}>
            <Ionicons style={AppStyles.CategoryListIcon} name="ios-arrow-forward-outline"/>
              {/* <MaterialIcons name="chevron-right" style={AppStyles.PanelIcon}/> */}
            </Col>
          </Row>
        </Grid>
      </TouchableHighlight>
    )
  }
}
