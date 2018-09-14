import React, {Component} from 'react';
import {View, ScrollView, Text, Image, TouchableHighlight} from 'react-native';
import {AppStyles} from '../../StyleSheet';
import {Ionicons} from '@expo/vector-icons';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import {Col, Row, Grid} from "react-native-easy-grid";

export class Detail extends React.Component {
  static navigationOptions = {
    title: 'Haber Detayı',
    tabBarIcon: ({focused}) => (<Ionicons
      name={focused
      ? 'ios-globe'
      : 'ios-globe-outline'}
      style={AppStyles.menuIcon}/>)
  };

  render() {
    const {params} = this.props.navigation.state;
    const id = params
      ? params.id
      : null;
    return (
      <ScrollView >
        <Grid>
          <Row>
            <Col>
              <Image
                style={AppStyles.NewsImage}
                source={require('../../../assets/image/doctor/doctor-1.jpg')}/>
              <View style={AppStyles.Overlay}/>
            </Col>
          </Row>
          <Row style={AppStyles.PageContainer}>
            <Col>
              <Text style={AppStyles.PageHeading}>Bu Başlığın ID'si {id}</Text>
              <Text style={AppStyles.PageContent}>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            </Col>
          </Row>
        </Grid>
      </ScrollView>
    );
  }
}