import React from 'react';
import {StyleSheet, Platform, View} from 'react-native';
import {TabNavigator, StackNavigator, TabBarBottom} from 'react-navigation'; // Version can be specified in package.json
import {AppStyles} from './src/StyleSheet';
import {Home} from './src/Screens/Home';
import {Appointment} from './src/Screens/Appointment';
import {Others, Menu, Gallery} from './src/Screens/Others';
import {NewsList, NewsDetail,NewsCategory} from './src/Screens/News';

const NewsNavigator = StackNavigator({
    Category: {
        screen: NewsCategory,
        path: '/News/category'
    },
    List: {
        screen: NewsList,
        path: '/News/list'
    },
    Detail: {
         screen: NewsDetail,
        path: '/News/detail/:id'
    }
});

const OthersNavigator = StackNavigator({
    Menu: {
        screen: Menu,
        path: '/Others/Menu'
    },
    Gallery: {
        screen: Gallery,
        path: '/Others/Gallery'
    }
});

const MyApp = TabNavigator({
    Home: {
        screen: Home
    },
    Appointment: {
        screen: Appointment
    },
    News: {
        screen: NewsNavigator
    },
    Others: {
        screen: OthersNavigator
    }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        activeTintColor: '#0245A3',
        inactiveTintColor: '#6d6d6d',
        ...Platform.select({
            ios: {},
            android: {
                labelStyle: {
                    fontSize: 7,
                    textTransform: 'uppercase'
                },
                tabStyle: {
                    marginBottom: -10
                },
                style: {
                    backgroundColor: 'white',
                    elevation: 10,
                    marginTop: 1
                }
            }
        })
    },
    animationEnabled: true,
    tabBarIcon: {
        titleColor: '#0245A3'
    }
},);

export default class App extends React.Component {
    render() {
        return (
            <View style={AppStyles.container}>

                <MyApp style={AppStyles.menu}/>
            </View>
        )
    }
}
