import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './style';
const Products = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      {
        //back Login Button
      }
      <View style={styles.backContainer}>
        <Image
          source={require('../../../assets/back.png')}
          style={styles.backImage}
        />
        <Text style={styles.backText}>Back</Text>
      </View>
      {
        //back Login Button Close
      }
      {
        //Text on Dashboard
      }
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Multi-Textured Curls</Text>
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
          <TouchableOpacity style={styles.touchContainer2}>
            <Image
              source={require('../../../assets/product.png')}
              style={styles.imageContainer}
            />
            <View style={styles.opacityContainer} opacity={0.8}>
              <Text style={styles.opacityText}>Products 1</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchContainer1}>
            <Image
              source={require('../../../assets/product.png')}
              style={styles.imageContainer}
            />
            <View style={styles.opacityContainer} opacity={0.8}>
              <Text style={styles.opacityText}>Products 2</Text>
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
          <TouchableOpacity style={styles.touchContainer2}>
            <Image
              source={require('../../../assets/product.png')}
              style={styles.imageContainer}
            />
            <View style={styles.opacityContainer} opacity={0.8}>
              <Text style={styles.opacityText}>Products 3</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchContainer1}>
            <Image
              source={require('../../../assets/product.png')}
              style={styles.imageContainer}
            />
            <View style={styles.opacityContainer} opacity={0.8}>
              <Text style={styles.opacityText}>Products 4</Text>
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
          <TouchableOpacity style={styles.touchContainer2}>
            <Image
              source={require('../../../assets/product.png')}
              style={styles.imageContainer}
            />
            <View style={styles.opacityContainer} opacity={0.8}>
              <Text style={styles.opacityText}>Products 5</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchContainer1}>
            <Image
              source={require('../../../assets/product.png')}
              style={styles.imageContainer}
            />
            <View style={styles.opacityContainer} opacity={0.8}>
              <Text style={styles.opacityText}>Products 6</Text>
            </View>
          </TouchableOpacity>
        </View>
        {
          //row 3 close
        }
      </View>
      {/**
      {
        //Button
      }
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.nextText}>Sign Up</Text>
      </TouchableOpacity>
      {
        //Button Close
      }
       */}
    </View>
  );
};

export default Products;
