import React, { Component } from 'react';
// import { Provider } from 'react-redux';
import {View,Text} from 'react-native';
// import Splash from './containers/Splash';
// import HomeScreen from './containers/Home';

export default class AppRoot extends Component {

    constructor(props) {
        super(props);
        this.state = { showSplash: true };
    }

    _onSplashTimeOut() {
        this.setState({
            showSplash: false
        });
    }
 
    render() {

        // State hazır olana kadar splashi göster
        //if (this.state.showSplash)
        //    return <Splash timeout={ 3000 } onTimeOut={ this._onSplashTimeOut.bind(this) } />

        return (
           
              <HomeScreen/>
           
        )
    }
}