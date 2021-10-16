import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './style';
const signup = () => {
  return (
    <View
      style={
        {
          //flex: 1,
          //backgroundColor: 'white',
          //   height: '100%',
          //  width: '100%',
        }
      }>
      {
        //back Login Button
      }
      <View style={styles.signupContainer}>
        <Image
          source={require('../../assets/back.png')}
          style={styles.signupImage}
        />
        <Text style={styles.signupText}>Signup</Text>
      </View>
      {
        //back Login Button Close
      }
      {
        //Image
      }
      <Image
        source={require('../../assets/SignUp.png')}
        style={styles.mainImage}
      />
      {
        //Image Close
      }
      {
        //TextInput
      }
      <View style={styles.textInputContainer}>
        <TextInput placeholder="Email" style={styles.textInput1} />
        <TextInput
          placeholder="Fullname"
          style={{
            margin: 15,

            width: 343,
            color: '#BDBDBD',
            height: 56,
            // top: 10,
            borderRadius: 8,
            borderWidth: 0.5,
            borderColor: '#BDBDBD',
            padding: 10,
            fontSize: 16,
            lineHeight: 19,
          }}
        />
        <TextInput placeholder="Password" style={styles.textInput2} />
      </View>
      {
        //TextInput Close
      }
      {
        //or line
      }
      <View style={styles.orLineContainer}>
        <View style={{flex: 1, height: 1, backgroundColor: '#BDBDBD'}} />
        <View>
          <Text style={styles.orText}>or Log in</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#BDBDBD'}} />
      </View>

      {
        //or line Close
      }
      {
        //facebook and Google+
      }
      <View style={styles.fbGoogleContainer}>
        <View style={styles.fbContainer}>
          <Image
            source={require('../../assets/fb.png')}
            style={styles.fbImage}
          />
        </View>
        <View style={styles.googleContainer}>
          <Image
            source={require('../../assets/google.png')}
            style={styles.googleImageContainer}
          />
        </View>
      </View>
      {
        //facebook and Google+
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
      {
        //Forgot Password
      }
      <Text
        style={{
          ...styles.nextText,
          color: '#333333',
          justifyContent: 'center',
          alignSelf: 'center',
          width: 139,
          marginTop: 20,
          lineHeight: 19,
        }}>
        Forgot Password ?
      </Text>
      {
        //Forgot Password Close
      }
    </View>
  );
};

export default signup;
