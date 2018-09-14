import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView, Text, Image, TouchableHighlight} from 'react-native';
import {AppStyles} from '../StyleSheet';
import {MaterialIcons} from '@expo/vector-icons';

export class MenuButton extends Component {
    _renderIcon(icon) {
        if (!icon) 
            return
        return (<MaterialIcons name={icon} style={AppStyles.menuButtonIcon}/>)
    }
    render() {
        const {
            icon,
            overlayColor,
            title,
            style,
            onPress,
            ...otherProps
        } = this.props;
        return (
            <TouchableHighlight style={AppStyles.MenuButtonPadding} onPress={onPress}>
                <View style={AppStyles.menuButtonContainer} style={style} {...otherProps}>
                    <View
                        style={[
                        AppStyles.menuButtonOverlay, {
                            backgroundColor: overlayColor
                        } 
                    ]}> 
                        <View style={AppStyles.menuButtonIconBack}>
                            {this._renderIcon(icon)}
                        </View>
                        <Text style={[AppStyles.menuButtonTitle]}>{title}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}
