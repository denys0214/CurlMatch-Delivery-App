import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    // flex: 1,
  },

  reactangleMainContainer: {
    marginTop: 315,
    alignSelf: 'center',
    width: '90%',
  },
  mainProductImage: {
    height: 322,
    width: '100%',
    position: 'absolute',
  },
  nextText: {
    color: '#FFFFFF',
    //width: 38,
    //  height: 19,
    fontWeight: '700',
    fontSize: 16,
    fontStyle: 'normal',
  },
  backContainer: {
    flexDirection: 'row',
    top: 34,
    left: 20,
    // backgroundColor: 'red',
    width: 73,
    height: 24,
  },
  backImage: {
    height: 14,
    width: 7,
    marginRight: 5,
    alignSelf: 'center',
  },
  backText: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    alignSelf: 'center',
    fontFamily: 'FontsFree-Net-AvenirLTStd-Book',
  },
  productsNameContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productsName: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '700',
    color: '#333333',
  },
  productsDetails: {
    fontSize: 16,
    lineHeight: 17,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'justify',
  },
  buttonContainer: {
    marginTop: 47,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 343,
    height: 57,
    borderRadius: 4,
    backgroundColor: '#FF5F5E',
  },
});
