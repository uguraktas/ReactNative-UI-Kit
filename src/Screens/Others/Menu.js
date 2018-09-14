import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import {AppStyles} from '../../StyleSheet';
import {Ionicons} from '@expo/vector-icons';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import {DrPanel2} from '../../components/DrPanel2';
import {MenuButton} from '../../components/MenuButton';
import {Col, Row, Grid} from "react-native-easy-grid";

const window = Dimensions.get('window');

class BackgroundImage extends Component {
  render() {
    return (
      <Image
        source={require('../../../assets/image/page-bg.jpg')}
        style={AppStyles.backgroundImage}>
        {this.props.children}
      </Image>
    )
  }
}
export class Menu extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Diğer',
    tabBarIcon: ({focused}) => (<Ionicons
      name={focused
      ? 'ios-infinite'
      : 'ios-infinite-outline'}
      style={AppStyles.menuIcon}/>)
  };

  render() {
    return (
      <View>
        <Image
          style={[
          {
            width: window.width,
            height: window.height
          },
          AppStyles.backgroundImage
        ]}
          source={require('../../../assets/image/page-bg.jpg')}/>
        <ScrollView style={[AppStyles.TopFixedContainer, AppStyles.otherMenuPage]}>
          <Grid >
            <Row>
              <Col>
                <MenuButton
                  overlayColor='white'
                  onPress={() => this.props.navigation.navigate('Gallery')}
                  style={{
                  height: 180
                }}
                  icon="dashboard"
                  title="Galeri"/>
              </Col>
              <Col>
                <MenuButton
                  overlayColor='white'
                  onPress={() => this.props.navigation.navigate('Appointment')}
                  style={{
                  height: 180
                }}
                  icon="video-library"
                  title="Videolar"/>
              </Col>
            </Row>
            <Row>
              <Col>
                <MenuButton
                  overlayColor='white'
                  onPress={() => this.props.navigation.navigate('Appointment')}
                  style={{
                  height: 180
                }}
                  icon="date-range"
                  title="Randevu Al"/>
              </Col>
              <Col>
                <MenuButton
                  overlayColor='white'
                  onPress={() => this.props.navigation.navigate('Appointment')}
                  style={{
                  height: 180
                }}
                  icon="public"
                  title="Haberler"/>
              </Col>
            </Row>
            <Row>
              <Col>
                <MenuButton
                  overlayColor='white'
                  onPress={() => this.props.navigation.navigate('Appointment')}
                  style={{
                  height: 180
                }}
                  icon="question-answer"
                  title="Sorular"/>
              </Col>
              <Col>
                <MenuButton
                  overlayColor='white'
                  onPress={() => this.props.navigation.navigate('Appointment')}
                  style={{
                  height: 180
                }}
                  icon="perm-phone-msg"
                  title="Bize Ulaşın"/>
              </Col>
            </Row>
          </Grid>
        </ScrollView>
      </View>
    );
  }
}
