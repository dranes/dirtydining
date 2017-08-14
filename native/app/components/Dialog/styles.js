import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({

  wrapper: {
    ...EStyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  container: {
    backgroundColor: '$colorWhite',
    flexDirection: 'column',
    overflow: 'hidden',
    borderRadius: 8,
    width: '80%',
    maxWidth: 400
  },

  header: {
    backgroundColor: '$colorLightGray',
    borderBottomWidth: 1,
    borderBottomColor: '$colorGray',
    alignItems: 'center',
    padding: 12
  },

  textTitle: {
    color: '$colorDialogTitle',
    fontSize: 13
  },

  body: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },


  footer: {
    padding: 12,
    backgroundColor: '$colorWhite',
    alignItems: 'center'
  },

  buttonClose: {
    width: '100%',
    alignItems: 'center'
  },

  textClose: {
    color: '$colorButtonText',
    fontWeight: 'bold'
  }

})