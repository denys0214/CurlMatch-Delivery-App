import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';      
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './style';
const Prefrence = ({navigation, route}) => {
  const [getFirstOption, setFirstOption] = useState('1st');
  const [getSecondOption, setSecondOption] = useState('1st');
  const [getThirdOption, setThirdOption] = useState('1st');
  const [getfourthption, setfourthption] = useState('1st');
  const [getFivthption, setFivthption] = useState('1st');
  const lists = [
    {
      label: 'Light products with very little hold!',
      value: '1st',
    },
    {
      label: 'Serums and leave in conditioners',
      value: '2nd',
    },
    {
      label: 'Gels, lotions and stylers for more shape and curl definition',
      value: '3rd',
    },
    {
      label: 'Creams, butters and oils that provide maximum moisture and hold',
      value: '4th',
    },
  ];
  return (
    <View style={styles.container}>
      {
        //back Login Button
      }
      <View style={styles.backContainer}>
        <Image
          source={require('../../assets/back.png')}
          style={styles.backImage}
        />
        <Text style={styles.backText}>Back</Text>
      </View>
      {
        //back Login Button Close
      }
      {
        //question 1
      }
      <View style={{marginTop: 47, alignItems: 'center'}}>
        <Text style={styles.questionText}>
          Which products work best in your hair?
        </Text>
        <DropDownPicker
          items={lists}
          defaultValue={getFirstOption}
          containerStyle={{height: 52}}
          style={styles.dropDownContainer}
          itemStyle={styles.dropDownItemStyle}
          dropDownStyle={styles.dropDownItemContainerStyle}
          selectedLabelStyle={styles.selectedLabelStyleCon}
          activeItemStyle={styles.activeItemStyle}
          activeLabelStyle={styles.activeLabelStyle}
          labelStyle={styles.labelStyle}
          onChangeItem={item => setFirstOption(item.value)}
        />
      </View>
      {
        //question 1 Close
      }
      {
        //question 2
      }
      <View
        style={{
          alignItems: 'center', // marginTop: 10,
        }}>
        <Text style={styles.questionText}>How do you describe your hair?</Text>
        <DropDownPicker
          items={lists}
          defaultValue={getSecondOption}
          containerStyle={{height: 52}}
          style={styles.dropDownContainer}
          itemStyle={styles.dropDownItemStyle}
          dropDownStyle={styles.dropDownItemContainerStyle}
          selectedLabelStyle={styles.selectedLabelStyleCon}
          activeItemStyle={styles.activeItemStyle}
          activeLabelStyle={styles.activeLabelStyle}
          labelStyle={styles.labelStyle}
          onChangeItem={item => setSecondOption(item.value)}
        />
      </View>
      {
        //question 2 Close
      }
      {
        //question 3
      }
      <View
        style={{
          alignItems: 'center',
          // marginTop: 10,
        }}>
        <Text style={styles.questionText}>
          What’s the biggest challenge with your hair ?
        </Text>
        <DropDownPicker
          items={lists}
          defaultValue={getThirdOption}
          containerStyle={{height: 52}}
          style={styles.dropDownContainer}
          itemStyle={styles.dropDownItemStyle}
          dropDownStyle={styles.dropDownItemContainerStyle}
          selectedLabelStyle={styles.selectedLabelStyleCon}
          activeItemStyle={styles.activeItemStyle}
          activeLabelStyle={styles.activeLabelStyle}
          labelStyle={styles.labelStyle}
          onChangeItem={item => setThirdOption(item.value)}
        />
      </View>
      {
        //question 3 Close
      }
      {
        //question 4
      }
      <View
        style={{
          alignItems: 'center',
          // marginTop: 10,
        }}>
        <Text style={styles.questionText}>
          What is the size of your curls ?!
        </Text>
        <DropDownPicker
          items={lists}
          defaultValue={getfourthption}
          containerStyle={{height: 52}}
          style={styles.dropDownContainer}
          itemStyle={styles.dropDownItemStyle}
          dropDownStyle={styles.dropDownItemContainerStyle}
          selectedLabelStyle={styles.selectedLabelStyleCon}
          activeItemStyle={styles.activeItemStyle}
          activeLabelStyle={styles.activeLabelStyle}
          labelStyle={styles.labelStyle}
          onChangeItem={item => setfourthption(item.value)}
        />
      </View>
      {
        //question 4 Close
      }
      {
        //question 5
      }
      <View
        style={{
          alignItems: 'center',
          // marginTop: 10,
        }}>
        <Text style={styles.questionText}>
          How do you best describe your curl routine in the morning?!
        </Text>
        <DropDownPicker
          items={lists}
          defaultValue={getFivthption}
          containerStyle={{height: 52}}
          style={styles.dropDownContainer}
          itemStyle={styles.dropDownItemStyle}
          dropDownStyle={styles.dropDownItemContainerStyle}
          selectedLabelStyle={styles.selectedLabelStyleCon}
          activeItemStyle={styles.activeItemStyle}
          activeLabelStyle={styles.activeLabelStyle}
          labelStyle={styles.labelStyle}
          onChangeItem={item => setFirstOption(item.value)}
        />
      </View>
      {
        //question 5 Close
      }

      {
        //Button
      }
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
      {
        //Button Close
      }
    </View>
  );
};

export default Prefrence;
