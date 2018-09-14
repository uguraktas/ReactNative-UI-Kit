export default {
    mainButtonContainer: {
        flex: 1
    },
    mainButtonImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        zIndex:1,
        //alignSelf: 'stretch'
    },
    mainButtonGradiend:{
        flex:1,
        position:'absolute',
        bottom:0,
        backgroundColor:'black',
        height:'20%',
        opacity:0.2
    },
    mainButtonOverlay: {
        flex:1,
        justifyContent:'flex-end',
        padding: 25,
        position: 'absolute',
        zIndex:2,
        height:'100%',
        width:'100%',
    },
    mainButtonIcon:{
        color:'#fff',
        fontSize:40,
        width:40,
        height:40,
        marginBottom:15
    },
    mainButtonTitle:{
        fontSize:22,
        fontWeight:"100",
        color:'white',
        marginTop:-5
    },
    mainButtonDescription:{
        fontSize:12,
        color:'white'
    }
}