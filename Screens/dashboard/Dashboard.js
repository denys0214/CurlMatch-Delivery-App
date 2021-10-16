import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import styles from './style';
const DashBoard = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      {
        //Text on Dashboard
      }
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>CurlMatch</Text>
      </View>
      {
        //Elements on Dashboard
      }
      <View style={styles.reactangleMainContainer}>
        {
          //row1
        }
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 16,
          }}>
          <TouchableOpacity
            style={styles.touchContainer2}
            onPress={() => navigation.navigate('Waves')}>
            <Image
              source={require('../../assets/waves.png')}
              style={styles.imageContainer}
            />
            <View style={styles.opacityContainer} opacity={0.8}>
              <Text style={styles.opacityText}>Waves (2A-2C)</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchContainer1}
            onPress={() => navigation.navigate('Curls')}>
            <Image
              source={require('../../assets/curls.png')}
              style={styles.imageContainer}
            />
            <View style={styles.opacityContainer} opacity={0.8}>
              <Text style={styles.opacityText}>Curls (3A-3B)</Text>
            </View>
          </TouchableOpacity>
        </View>
        {
          //row 1 close
        }
        {
          //row2
        }
        <View style={styles.reactangleContainer}>
          <TouchableOpacity
            style={styles.touchContainer2}
            onPress={() => navigation.navigate('Coily')}>
            <Image
              source={require('../../assets/coily.png')}
              style={styles.imageContainer}
            />
            <View style={styles.opacityContainer} opacity={0.8}>
              <Text style={styles.opacityText}>COILY CURLS (3C-4A)</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchContainer1}
            onPress={() => navigation.navigate('Kinky')}>
            <Image
              source={require('../../assets/kinky.png')}
              style={styles.imageContainer}
            />
            <View
              style={{...styles.opacityContainer, height: 52, marginTop: 145}}
              opacity={0.8}>
              <Text style={styles.opacityText}>KINKY CURLS</Text>
              <Text style={styles.opacityText}>(4B-4C)</Text>
            </View>
          </TouchableOpacity>
        </View>
        {
          //row 2 close
        }
        {
          //row3
        }
        <View style={styles.reactangleContainer}>
          <TouchableOpacity
            style={styles.touchContainer2}
            onPress={() => navigation.navigate('Children')}>
            <Image
              source={require('../../assets/children.png')}
              style={styles.imageContainer}
            />
            <View style={styles.opacityContainer} opacity={0.8}>
              <Text style={styles.opacityText}>CHILDREN'S CURLS</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchContainer1}
            onPress={() => navigation.navigate('Multi')}>
            <Image
              source={require('../../assets/children.png')}
              style={styles.imageContainer}
            />
            <View
              style={{...styles.opacityContainer, height: 52, marginTop: 145}}
              opacity={0.8}>
              <Text style={styles.opacityText}>MULTI-TEXTURED</Text>
              <Text style={styles.opacityText}>CURLS</Text>
            </View>
          </TouchableOpacity>
        </View>
        {
          //row 3 close
        }
      </View>
    </View>
  );
};

export default DashBoard;
