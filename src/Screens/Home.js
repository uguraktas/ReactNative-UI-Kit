import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Dimensions,
  TouchableHighlight,
  Button,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView
} from 'react-native';
import {AppStyles} from '../StyleSheet';
import {Ionicons} from '@expo/vector-icons';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import {Col, Row, Grid} from "react-native-easy-grid";
import {ImageButton} from '../components/ImageButton';
import {DrButton} from '../components/DrButton';
import {DrInput} from '../components/DrInput';
import {PlayButton} from '../components/PlayButton';
import {DrPanel} from '../components/DrPanel';
import {DrPanel2} from '../components/DrPanel2';
import {DrPanel3} from '../components/DrPanel3';
import {DrPanel4} from '../components/DrPanel4';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from '../StyleSheet/SliderEntry.style';
import DrSlider from '../components/DrSlider';
import {scrollInterpolators, animatedStyles} from '../utils/sliderAnimations';
import {ENTRIES1, ENTRIES2} from '../data/slider';



const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

export class Home extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Anasayfa',
    screen: Home,
    tabBarIcon: ({focused}) => (<Ionicons
      name={focused
      ? 'ios-home'
      : 'ios-home-outline'}
      style={AppStyles.menuIcon}/>)
  };

  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }

  _renderItem({item, index}) {
    return <DrSlider data={item} even={(index + 1) % 2 === 0}/>;
  }

  _renderItemWithParallax({
    item,
    index
  }, parallaxProps) {
    return (<DrSlider
      data={item}
      even={(index + 1) % 2 === 0}
      parallax={true}
      parallaxProps={parallaxProps}/>);
  }

  _renderLightItem({item, index}) {
    return <DrSlider data={item} even={false}/>;
  }

  _renderDarkItem({item, index}) {
    return <DrSlider data={item} even={true}/>;
  }

  render() {
    return (
      <ScrollView style={AppStyles.TopFixedContainer}>
        <Grid>
          <Row>
            <Col>
            <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  // inactiveSlideShift={20}
                  containerCustomStyle={AppStyles.slider}
                  contentContainerCustomStyle={AppStyles.sliderContentContainer}
                  loop={true}
                  loopClonesPerSide={2}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
            </Col>
          </Row>
          <Row >
            <Col>
              <ImageButton
                bgImage={require('../../assets/image/doctor/doctor-1.jpg')}
                overlayColor="rgba(27, 49, 87, 0.8)"
                onPress={() => this.props.navigation.navigate('Appointment')}
                style={{
                height: 200
              }}
                icon="ios-call-outline"
                title="Hakkımızda"
                description="Hakkımda bilgilere sahip olun, süper bir iş bu gerçekten"/>
            </Col>
            <Col>
              <ImageButton
                bgImage={require('../../assets/image/doctor/doctor-1.jpg')}
                overlayColor="rgba(27, 49, 87, 0.8)"
                onPress={() => this.props.navigation.navigate('Appointment')}
                style={{
                height: 200
              }}
                icon="ios-call-outline"
                title="Hakkımızda"
                description="Hakkımda bilgilere sahip olun, süper bir iş bu gerçekten"/>
            </Col>
          </Row>
          <Row>
            <Col style={AppStyles.margin5}>
              <DrButton BtType="buttonDanger" title="Button"/>
            </Col>
            <Col style={AppStyles.margin5}>
              <DrButton BtType="buttonWarning" title="Button"/>
            </Col>
            <Col style={AppStyles.margin5}>
              <DrButton BtType="buttonSecondary" title="Button"/>
            </Col>
          </Row>
          <Row>
            <Col style={AppStyles.margin5}>
              <DrButton BtType="buttonSuccess" title="Button"/>
            </Col>
            <Col style={AppStyles.margin5}>
              <DrButton BtType="buttonLight" title="Button"/>
            </Col>
            <Col style={AppStyles.margin5}>
              <DrButton BtType="buttonDark" title="Button"/>
            </Col>
          </Row>
          <Row>
            <Col style={AppStyles.margin5}>
              <DrInput label="User Name"/>
              <DrInput label="Password"/>
            </Col>
          </Row>
          <Row>
            <Col style={AppStyles.margin5}>
              <DrPanel4
                image={require('../../assets/image/doctor/doctor-1.jpg')}
                title="Heading"
                desc="Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet"
                onPress={() => this.props.navigation.navigate('Appointment')}/>
            </Col>
          </Row>
          <Row>
            <Col style={AppStyles.margin5}>
              <DrPanel3
                image={require('../../assets/image/doctor/doctor-1.jpg')}
                title="Heading"
                desc="Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet"
                onPress={() => this.props.navigation.navigate('Appointment')}/>
            </Col>
          </Row>
          <Row>
            <Col style={AppStyles.margin5}>
              <DrPanel2
                title="Heading"
                desc="Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet"
                onPress={() => this.props.navigation.navigate('Appointment')}/>
            </Col>
          </Row>
          <Row>
            <Col style={AppStyles.margin5}>
              <DrPanel
                image={require('../../assets/image/doctor/doctor-1.jpg')}
                title="Heading"
                desc="Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet Lorem ipsum sit amet lan ne hacet"
                onPress={() => this.props.navigation.navigate('Appointment')}/>
            </Col>
          </Row>
          <Row>
            <Col style={AppStyles.margin5}>
              <PlayButton
                bgImage={require('../../assets/image/doctor/doctor-1.jpg')}
                overlayColor="rgba(2, 2, 5, 0.7)"
                onPress={() => this.props.navigation.navigate('Appointment')}
                style={{
                height: 200
              }}
                icon="ios-call-outline"
                title="Hakkımızda"/>
            </Col>
            <Col style={AppStyles.margin5}>
              <PlayButton
                bgImage={require('../../assets/image/doctor/doctor-1.jpg')}
                overlayColor="rgba(2, 2, 5, 0.7)"
                onPress={() => this.props.navigation.navigate('Appointment')}
                style={{
                height: 200
              }}
                icon="ios-call-outline"
                title="Hakkımızda"/>
            </Col>
          </Row>
        </Grid>
      </ScrollView>
    )
  }
}