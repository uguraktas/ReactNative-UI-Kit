import {Platform, StyleSheet} from 'react-native';

import page from './page';
import imagebutton from './imagebutton';
import button from './button';
import form from './form';
import playbutton from './playbutton';
import panels from './panels';
import menubutton from './menubutton';
import categorylist from './categorylist';

export const AppStyles = StyleSheet.create({
    ...page,
    ...imagebutton,
    ...button,
    ...form,
    ...playbutton,
    ...panels,
    ...menubutton,
    ...categorylist,
    container: {
        flex: 1,
        backgroundColor: '#ECECEB'
    },
    TopFixedContainer: {
        marginTop: Platform.OS === 'ios'
            ? 20
            : 24
    },
    bgColorWhite: {
        backgroundColor: '#fff'
    },

    margin5: {
        margin: 5
    },
    PageContainer: {
        backgroundColor: '#fff',
        padding: 15
    },
    PageHeading: {
        fontWeight: '700',
        fontSize: 25,
        marginBottom: 10
    },
    menuIcon: {
        fontSize: 25
    },
    BorderBottom: {
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1
    },
    MarginTop15: {
        marginTop: 15
    },
    NewsImage: {
        height: 150,
        width: '100%'
    },
    MenuListIcon: {
        fontSize: 25
    },

    Overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },

    // Colors PagesContainer: {     backgroundColor: '#fff',     padding: 15, flex:
    // 1,     marginHorizontal: 10,     borderBottomEndRadius: 10,
    // borderBottomStartRadius: 10 }, PagesHeading: {     fontWeight: '700',
    // fontSize: 25,     marginBottom:10, }, PagesContent: {},

    FacebookColor: {
        backgroundColor: '#3b579d'
    },
    GoogleColor: {
        backgroundColor: '#e34633'
    },
    YoutubeColor: {
        backgroundColor: '#EE1C1B'
    },
    LinkedinColor: {
        backgroundColor: '#007bb6'
    },
    WhatsappColor: {
        backgroundColor: '#25D366'
    },
    TwitterColor: {
        backgroundColor: '#00b0ed'
    },
    // Slider Başlıyor.
    safeArea: {
        flex: 1,
        backgroundColor: '#1a1917',
    },

    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: 30
    },
    exampleContainerDark: {
        backgroundColor: '#1a1917',
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: '#1a1917',
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },

});
