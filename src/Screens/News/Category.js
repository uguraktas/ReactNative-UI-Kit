import React, {Component} from 'react';
import {
  Button,
  View,
  ScrollView,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import {Col, Row, Grid} from "react-native-easy-grid";
import {AppStyles} from '../../StyleSheet';
import {Ionicons} from '@expo/vector-icons';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import {CategoryList} from '../../components/CategoryList';

export class Category extends React.Component {
  static navigationOptions = {
    title: 'Kategoriler',
    tabBarIcon: ({focused}) => (<Ionicons
      name={focused
      ? 'ios-globe'
      : 'ios-globe-outline'}
      style={AppStyles.menuIcon}/>)
  };

  render() {
    return (
      <ScrollView>
        <Grid>
          <Row>
            <Col style={AppStyles.BorderBottom}>
              <CategoryList onPress={() => this.props.navigation.navigate('List')} title="Güncel Konular"/>
              <CategoryList onPress={() => this.props.navigation.navigate('List')} title="Gebelik"/>
              <CategoryList onPress={() => this.props.navigation.navigate('List')} title="Doğum Sonrası"/>
              <CategoryList onPress={() => this.props.navigation.navigate('List')} title="Bebek Sağlığı"/>
              <CategoryList onPress={() => this.props.navigation.navigate('List')} title="Sezeryan"/>
              <CategoryList onPress={() => this.props.navigation.navigate('List')} title="Güncel Konular"/>
              <CategoryList onPress={() => this.props.navigation.navigate('List')} title="Gebelik"/>
              <CategoryList onPress={() => this.props.navigation.navigate('List')} title="Doğum Sonrası"/>
              <CategoryList onPress={() => this.props.navigation.navigate('List')} title="Bebek Sağlığı"/>
              <CategoryList onPress={() => this.props.navigation.navigate('List')} title="Sezeryan"/>
              <CategoryList onPress={() => this.props.navigation.navigate('List')} title="Güncel Konular"/>
              <CategoryList onPress={() => this.props.navigation.navigate('List')} title="Gebelik"/>
              <CategoryList onPress={() => this.props.navigation.navigate('List')} title="Doğum Sonrası"/>
              <CategoryList onPress={() => this.props.navigation.navigate('List')} title="Bebek Sağlığı"/>
              <CategoryList onPress={() => this.props.navigation.navigate('List')} title="Sezeryan"/>
            </Col>
          </Row>

        </Grid>
      </ScrollView>
    );
  }
}