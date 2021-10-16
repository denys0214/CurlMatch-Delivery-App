import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {AuthContext} from '../../context';
import styles from './style';
const SignIn = () => {
  const {SignInco} = React.useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      {
        //Image
      }
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/Intersect.png')} />
      </View>
      {
        //Image Close
      }
      {
        //TextInput
      }
      <View style={styles.textInputContainer}>
        <TextInput placeholder="Email" style={styles.textInput1} />
        <View style={{flexDirection: 'row'}}>
          <TextInput placeholder="Password" style={styles.textInput2} />
          <Image
            source={require('../../assets/eye.png')}
            style={{position: 'absolute', left: 310, top: 43}}
          />
        </View>
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
          <Text style={styles.orText}>Or Log in</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#BDBDBD'}} />
      </View>

      {
        //or line Close
      }
      {
        //facebook and Google+
      }
      <View style={styles.fbandGoogleContainer}>
        <View style={styles.fbContainer}>
          <Image
            source={require('../../assets/fb.png')}
            style={styles.fbContainerImage}
          />
        </View>
        <View style={styles.GoogleContainer}>
          <Image
            source={require('../../assets/google.png')}
            style={styles.GoogleContainerImage}
          />
        </View>
      </View>
      {
        //facebook and Google+
      }
      {
        //Button
      }
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => SignInco()}>
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
          marginTop: 26,
          lineHeight: 19,
        }}>
        Forgot Password?
      </Text>
      {
        //Forgot Password Close
      }
    </SafeAreaView>
  );
};

export default SignIn;
