import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableHighlight,
  TextInput,
  AppRegistry
} from 'react-native';

import {AppStyles} from '../StyleSheet';
import {Ionicons} from '@expo/vector-icons';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import {Col, Row, Grid} from "react-native-easy-grid";
import {DrInput} from '../components/DrInput';
import {DrButton} from '../components/DrButton';
import moment from 'moment';
import DatePicker from 'react-native-datepicker'

const minDate = moment(new Date()).format('DD-MM-YYYY');
const maxDate = moment(new Date())
  .add(1, 'month')
  .format('DD-MM-YYYY');

export class Appointment extends React.Component {
  constructor(props) {
    super(props)
    this._resetFormData();
  }
  _resetFormData() {
    this.state = {
      FormStatus: 0,
      name: "",
      phone: "",
      email: "",
      date: "",
      time: ""
    }
  }
  _getFormData() {
    return {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      date: this.state.date,
      time: this.state.time,
      note: this.state.note
    }
  }
  _submitToApi(formData) {
    let that = this;

    // Loading
    that.setState({FormStatus: 1});

    setTimeout(function () {
      fetch(AppConfig.Api.BaseUrl + "appointment", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': AppConfig.Api.Token
        },
          body: JSON.stringify(formData)
        })
        .then(ApiUtils.checkStatus)
        .then((response) => response.json())
        .then((responseJson) => {
          // Success
          that.setState({FormStatus: 2});
        })
        .catch((error) => {
          // Error
          that.setState({FormStatus: 3});
        });
    }, 3000);
  }
  _sendForm() {
    const formData = this._getFormData();
    this._submitToApi(formData);
    return;
    if (!this.state.name) 
      return this._showAlert("Lütfen adınızı giriniz");
    if (!this.state.phone) 
      return this._showAlert("Lütfen telefon numaranızı giriniz");
    if (!this.state.email) 
      return this._showAlert("Lütfen e-posta adresinizi giriniz");
    if (!this.state.date) 
      return this._showAlert("Lütfen randevu almak istediğiniz tarihi seçiniz");
    if (!this.state.time) 
      return this._showAlert("Lütfen randevu almak istediğiniz saati seçiniz");
    }
  static navigationOptions = {
    tabBarLabel: 'Randevu Al',
    screen: Appointment,
    tabBarIcon: ({focused}) => (<Ionicons
      name={focused
      ? 'ios-calendar'
      : 'ios-calendar-outline'}
      style={AppStyles.menuIcon}/>)
  }
  render() {
    return (
      <ScrollView style={[AppStyles.PageContainer, AppStyles.TopFixedContainer]}>
        <Grid>
          <Row>
            <Col>
              <Text style={AppStyles.PageHeading}>Randevu Alın</Text>
            </Col>
          </Row>

          <Row>
            <Col>
              <DrInput icon='ios-contact' label="İsim Soyisim"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <DrInput icon='ios-at' label="E-Posta Adresiniz"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <DrInput icon='ios-call' label="Telefon Numaranız"/>
            </Col>
          </Row>
          <Row >
            <Col>
              <DrInput icon='ios-chatboxes' label="Notunuz"/>
            </Col>
          </Row>
          <Row  style={AppStyles.MarginTop15}>
            <Col>
              <DatePicker
                style={AppStyles.inputDate}
                date={this.state.date}
                mode="date"
                placeholder="Randevu Tarihi"
                format="DD.MM.YYYY"
                minDate={minDate}
                maxDate={maxDate}
                confirmBtnText="Tamam"
                cancelBtnText="İptal"
                iconComponent={< Ionicons style = {
                AppStyles.inputDateIcon
              }
              name = {
                'ios-calendar'
              } />}
                customStyles={{
                dateText: AppStyles.inputDateLabel,
                placeholderText: AppStyles.inputDateLabel,
                dateInput: {
                  width: '100%',
                  borderColor: 'transparent',
                  height: 80
                }
              }}
                onDateChange={(date) => {
                this.setState({date: date})
              }}/>
            </Col>
          </Row>
          <Row style={AppStyles.MarginTop15}>
            <Col>
              <DatePicker
                style={AppStyles.inputDate}
                date={this.state.time}
                mode="time"
                placeholder="Randevu Saati"
                confirmBtnText="Tamam"
                cancelBtnText="İptal"
                iconComponent={< Ionicons style = {
                AppStyles.inputDateIcon
              }
              name = {
                'ios-time'
              } />}
                customStyles={{
                dateText: AppStyles.inputDateLabel,
                placeholderText: AppStyles.inputDateLabel,
                dateInput: {
                  width: '100%',
                  borderColor: 'transparent',
                  height: 80
                }
              }}
                onDateChange={(time) => {
                this.setState({time: time})
              }}/>
            </Col>
          </Row>
          <Row>
            <Col style={AppStyles.MarginTop15}>
              <DrButton BtType="buttonSuccess" title="Randevu Al"/>
            </Col>
          </Row>
        </Grid>
      </ScrollView>
    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => UselessTextInputMultiline);