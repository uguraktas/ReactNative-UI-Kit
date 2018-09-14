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
export class DrPanel4 extends Component {
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
        style={AppStyles.panel4}>
        <Grid>
          <Row>
            <Col>
              <Image style={AppStyles.Panel4Image} source={image}/>
              <View style={AppStyles.Overlay}/>
            </Col>
          </Row>
          <Row style={AppStyles.Panel4Padding}>
            <Col >
              <Text style={AppStyles.Panel4Heading}>{title}</Text>
              <Text style={AppStyles.Panel4Text}>{desc}</Text>
            </Col>

          </Row>
        </Grid>
      </TouchableHighlight>
    )
  }
}
