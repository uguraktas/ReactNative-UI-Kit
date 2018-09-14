import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView, Text, Image, TouchableHighlight} from 'react-native';
import {AppStyles} from '../StyleSheet';
import {Ionicons} from '@expo/vector-icons';
export class ImageButton extends Component {

    _renderIcon(icon) {
        if (!icon) 
            return
        return (<Ionicons name={icon} style={AppStyles.mainButtonIcon}/>)
    }

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
                <View style={AppStyles.mainButtonContainer} style={style} {...otherProps}>
                    <Image style={[AppStyles.mainButtonImage]} source={bgImage}></Image>
                    <View
                        style={[
                        AppStyles.mainButtonOverlay, {
                            backgroundColor: overlayColor
                        }
                    ]}>
                        {this._renderIcon(icon)}
                        <Text style={[AppStyles.mainButtonTitle]}>{title}</Text>
                        <Text style={[AppStyles.mainButtonDescription]}>{description}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

ImageButton.propTypes = {
    bgImage: PropTypes.any.isRequired,
    overlayColor: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
};