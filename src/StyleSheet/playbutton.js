export default {

  playButtonContainer : {
    flex: 1
  },
  playButtonImage : {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    zIndex: 1,
    //alignSelf: 'stretch'
  },
  playButtonGradiend : {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'black',
    height: '20%',
    opacity: 0.2
  },
  playButtonOverlay : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    position: 'absolute',
    zIndex: 2,
    height: '100%',
    width: '100%'
  },
  playButtonIcon : {
    color: '#fff',
    fontSize: 50,
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 15,
    paddingLeft: 20,
    paddingTop: 5,
    borderColor:'#fff',
    borderWidth:1,

  },
  playButtonTitle : {
    fontSize: 22,
    fontWeight: "200",
    color: 'white',
    marginTop: -5
  },
  playButtonDescription : {
    fontSize: 12,
    color: 'white'
  }

}