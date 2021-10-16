import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    //    flex: 1,
    justifyContent: 'center',

    height: '100%',
    justifyContent: 'space-around',
  },
  nextText: {
    color: '#FFFFFF',
    //width: 38,
    //  height: 19,
    fontWeight: '700',
    fontSize: 16,
    fontStyle: 'normal',
  },
  buttonContainer: {
    marginTop: 52,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 343,
    height: 57,
    borderRadius: 4,
    backgroundColor: '#FF5F5E',
  },
  backContainer: {
    flexDirection: 'row',
    top: 34,
    left: 20,
    // backgroundColor: 'red',
    width: 73,
    height: 24,
    position: 'absolute',
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
  questionText: {
    // alignSelf: 'center',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '700',
    width: '90%',
    color: '#333333',
    //  marginTop: 40
  },
  dropDownContainer: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    width: '90%',
    alignSelf: 'center',
  },
  dropDownItemStyle: {
    justifyContent: 'flex-start',
    height: 56,
  },
  dropDownItemContainerStyle: {
    backgroundColor: '#f2f2f2',
    width: '90%',
    alignSelf: 'center',
    height: 400,
  },
  selectedLabelStyleCon: {
    color: '#39739d',
  },
  activeItemStyle: {
    justifyContent: 'center',
  },
  activeLabelStyle: {
    color: 'red',
  },
  labelStyle: {
    fontSize: 14,
    textAlign: 'left',
    color: '#000',
  },
});
