/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import {
  View, Image, Text, FlatList, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

import api from '../../services/api';

import UserIcon from '../../assets/user_icon.png';
import Header from '../../assets/header.png';
import ProductImage from '../../assets/product_image.png';

export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await api.get('products');

    if (response.data) {
      setProducts(response.data);
    }
  };

  useEffect(() => {
    getProducts();
  });


  // const products = [];
  // // eslint-disable-next-line no-plusplus
  // for (let i = 0; i < 30; i++) {
  //   products.push({ id: i + 1, name: 'Nome do produto', cod: '23453453434' });
  // }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}> */}
      <Image style={styles.header} source={Header} />
      {/* <View style={styles.headerBar}> */}
      <Text style={styles.headerText}>Seus produtos</Text>
      {/* </View> */}

      <TouchableOpacity
        style={styles.addProductButton}
        onPress={() => { navigation.navigate('ScanBarCode'); }}
      >
        <Feather name="plus" size={28} color="#ffffff" />
        <Text style={styles.addProductButtonText}>Novo Produto</Text>
      </TouchableOpacity>
      {/* </View> */}

      <FlatList
        data={products}
        style={styles.productsList}
        keyExtractor={(product) => (String(product.id))}
        showsVerticalScrollIndicator
        renderItem={({ item: product }) => (
          <TouchableOpacity onPress={() => { navigation.navigate('AddProduct', { product }); }} style={styles.product}>
            <Image source={ProductImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.product_name}</Text>
              <View style={styles.productCode}>
                <Text style={styles.productCodeName}>CÓD</Text>
                <Text style={styles.productCodeValue}>{product.barcode_number}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}
