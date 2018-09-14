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
import {DrPanel} from '../../components/DrPanel';

export class List extends React.Component {
  static navigationOptions = {
    title: 'Haberler',
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
            <Col>
              <DrPanel
                image={require('../../../assets/image/doctor/doctor-1.jpg')}
                title="Heading"
                desc="Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet"
                onPress={() => this.props.navigation.navigate('Detail', {id: 1})}/>
              <DrPanel
                image={require('../../../assets/image/doctor/doctor-1.jpg')}
                title="Heading"
                desc="Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet"
                onPress={() => this.props.navigation.navigate('Detail', {id: 2})}/>
              <DrPanel
                image={require('../../../assets/image/doctor/doctor-1.jpg')}
                title="Heading"
                desc="Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet"
                onPress={() => this.props.navigation.navigate('Detail', {id: 3})}/>
              <DrPanel
                image={require('../../../assets/image/doctor/doctor-1.jpg')}
                title="Heading"
                desc="Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet"
                onPress={() => this.props.navigation.navigate('Detail', {id: 4})}/>
            </Col>
          </Row>
        </Grid>
      </ScrollView>
    );
  }
}