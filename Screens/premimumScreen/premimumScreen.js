import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './style';
const PremimunScreen = () => {
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
        <Text style={styles.backText}>Log in</Text>
      </View>
      {
        //back Login Button Close
      }
      {
        //Image
      }
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.imageLogo}
        />
      </View>
      {
        //Image Close
      }
      {
        //Text after Image
      }
      <View style={styles.text1Container}>
        <Text style={styles.text1Text}> Loren Ipsum</Text>
      </View>
      <View style={styles.text2Container}>
        <Text style={styles.text2Text}>
          After confirmation your taxi will be approved, and you will be
          notified by your cab app
        </Text>
      </View>
      <View style={styles.text3Container}>
        <Text style={styles.text3Text}>$12.24</Text>
      </View>
      <View style={styles.text4Container}>
        <Text style={styles.text4Text}> Loren Ipsum</Text>
      </View>
      {
        //Text Close
      }
      {
        //Button
      }
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.nextText}>Get Premium!</Text>
      </TouchableOpacity>
      {
        //Button Close
      }
      {
        //login
      }
      <TouchableOpacity style={{}}>
        <Text style={styles.loginContainerText}> Login</Text>
      </TouchableOpacity>
      {
        //login Close
      }
      {
        //last Text
      }
      <Text style={styles.bottomText}>
        {' '}
        After confirmation your taxi will be approved
      </Text>
      {
        //last Text Close
      }
    </View>
  );
};

export default PremimunScreen;
