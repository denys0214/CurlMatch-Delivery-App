import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import styles from './style';

const ProductsDetails = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/ProductDetail.png')}
        style={styles.mainProductImage}
      />
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
        //Elements on ProductsDetails
      }
      {
        //Text and Heart
      }
      <View style={styles.reactangleMainContainer}>
        <View style={styles.productsNameContainer}>
          <Text style={styles.productsName}>Enjoy Shaping Lation</Text>
          <Image source={require('../../assets/heart.png')} />
        </View>
        {
          //Text and Heart Close
        }

        {
          //detail Text
        }
        <View
          style={{
            marginTop: 30,
          }}>
          <Text style={styles.productsDetails}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam
            sed egestas purus tempor. Vitae risus bibendum elementum lectus
            scelerisque justo pellentesque mauris. Imperdiet at egestas elit
            porttitor ac in tempor sed et. Vulputate amet diam bibendum ut odio
            dui eget mauris.
          </Text>
        </View>
        {
          //detail Text Close
        }
      </View>
      {
        //Button
      }
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.nextText}>Sign Up</Text>
      </TouchableOpacity>
      {
        //Button Close
      }
    </View>
  );
};

export default ProductsDetails;
