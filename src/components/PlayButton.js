import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView, Text, Image, TouchableHighlight} from 'react-native';
import {AppStyles} from '../StyleSheet';
import {Ionicons} from '@expo/vector-icons';

export class PlayButton extends Component {
  // _renderIcon(icon) {
  //   if (!icon) 
  //     return
  //   return (<Ionicons name={icon} style={AppStyles.mainButtonIcon}/>)
  // }
  render() {
    const {
      icon,
      title,
      description,
      style,
      bgImage,
      overlayColor,
      onPress,
      ...otherProps
    } = this.props;
    return (
      <TouchableHighlight onPress={onPress}>
        <View style={AppStyles.playButtonContainer} style={style} {...otherProps}>
          <Image style={[AppStyles.playButtonImage]} source={bgImage}></Image>
          <View
            style={[
            AppStyles.playButtonOverlay, {
              backgroundColor: overlayColor
            }
          ]}>
           <Ionicons name="ios-play" style={AppStyles.playButtonIcon}/>
            <Text style={[AppStyles.playButtonTitle]}>{title}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
