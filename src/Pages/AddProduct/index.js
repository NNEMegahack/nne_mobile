/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, Image, TextInput, ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import styles from './styles';
import barcodeImage from '../../assets/barcode.png';

export default function AddProduct() {
  const navigation = useNavigation();
  const route = useRoute();
  const { barCode, product } = route.params;

  const [loading, setLoading] = useState(true);
  const [productInfo, setProductInfo] = useState({});

  async function searchBarCode() {
    try {
      if (!productInfo.product_name && !product) {
        const response = await api.get(`barcode/${barCode}`);

        if (response.data.products.length) {
          setProductInfo(response.data.products[0]);
        }
      } else if (product) {
        setProductInfo(product);
      }
    } catch (err) {
      setProductInfo({ barcode_number: barCode });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    searchBarCode();
  }, []);

  const storeProduct = async () => {
    if (productInfo.barcode_number
      && productInfo.product_name
      && productInfo.category
      && productInfo.description
      && productInfo.price) {
      const {
        barcode_number, product_name, category, description, price,
      } = productInfo;

      const product = {
        barcode_number, product_name, category, description, price,
      };
      await api.post('products', product);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => { navigation.goBack(); }}
        >
          <Feather name="chevron-left" size={28} color="#ffffff" />
          <Text style={styles.buttonBackText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.contentWrapper, loading ? styles.loadingState : null]}>
        {loading && (
        <>
          <Text style={styles.loadingInfo}>Carregando informações...</Text>
          <View style={styles.barCodeInformation}>
            <Image style={styles.barCodeImage} source={barcodeImage} />
            <Text style={[styles.loadingInfo, styles.barCodeNumber]}>{barCode}</Text>
          </View>
        </>
        )}

        {!loading && (
          <View style={{
            flex: 1, justifyContent: 'space-between',
          }}
          >
            <ScrollView style={{ flex: 1 }}>
              <View>
                <View style={styles.inputBarCodeWrapper}>
                  <Text style={styles.inputBarCodeLabel}>
                    Código de barras
                  </Text>
                  <TextInput
                    style={styles.inputBarCode}
                    value={productInfo.barcode_number}
                    underlineColorAndroid="transparent"
                    keyboardType="numeric"
                    onChangeText={(text) => {
                      setProductInfo({
                        ...productInfo,
                        barcode_number: text,
                      });
                    }}
                    onSubmitEditing={() => {}}
                  />
                </View>

                <View style={styles.inputBarCodeWrapper}>
                  <Text style={styles.inputBarCodeLabel}>
                    Nome do produto
                  </Text>
                  <TextInput
                    style={styles.inputBarCode}
                    value={productInfo.product_name}
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    onChangeText={(text) => {
                      setProductInfo({
                        ...productInfo,
                        product_name: text,
                      });
                    }}
                    onSubmitEditing={() => {}}
                  />
                </View>

                <View style={styles.inputBarCodeWrapper}>
                  <TextInput
                    style={[styles.inputBarCode, { height: 120, textAlignVertical: 'top' }]}
                    value={productInfo.description}
                    placeholder="Descrição"
                    multiline
                    numberOfLines={4}
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    onChangeText={(text) => {
                      setProductInfo({
                        ...productInfo,
                        description: text,
                      });
                    }}
                    onSubmitEditing={() => {}}
                  />
                </View>

                <View style={styles.inputBarCodeWrapper}>
                  <Text style={styles.inputBarCodeLabel}>
                    Categoria
                  </Text>
                  <TextInput
                    style={styles.inputBarCode}
                    value={productInfo.category}
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    onChangeText={(text) => {
                      setProductInfo({
                        ...productInfo,
                        category: text,
                      });
                    }}
                    onSubmitEditing={() => {}}
                  />
                </View>

                <View style={styles.inputBarCodeWrapper}>
                  <Text style={styles.inputBarCodeLabel}>
                    Marca
                  </Text>
                  <TextInput
                    style={styles.inputBarCode}
                    value={productInfo.brand}
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    onChangeText={(text) => {
                      setProductInfo({
                        ...productInfo,
                        brand: text,
                      });
                    }}
                    onSubmitEditing={() => {}}
                  />
                </View>

                <View style={styles.inputBarCodeWrapper}>
                  <Text style={styles.inputBarCodeLabel}>
                    Publisher
                  </Text>
                  <TextInput
                    style={styles.inputBarCode}
                    value={productInfo.publisher}
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    onChangeText={(text) => {
                      setProductInfo({
                        ...productInfo,
                        publisher: text,
                      });
                    }}
                    onSubmitEditing={() => {}}
                  />
                </View>

                {/* <View style={styles.inputBarCodeWrapper}>
              <Text style={styles.inputBarCodeLabel}>
                Stores
              </Text>
              <TextInput
                style={styles.inputBarCode}
                value={productInfo.stores}
                underlineColorAndroid="transparent"
                keyboardType="default"
                onChangeText={(text) => {
                  setProductInfo({
                    ...productInfo,
                    stores: text,
                  });
                }}
                onSubmitEditing={() => {}}
              />
            </View> */}

                <View style={styles.inputBarCodeWrapper}>
                  <Text style={{
                    position: 'absolute', fontSize: 20, color: '#979797', top: 16, left: 10,
                  }}
                  >
                    R$
                  </Text>
                  <TextInput
                    style={[styles.inputBarCode, { width: '50%', paddingLeft: 40 }]}
                    value={productInfo.price ? String(productInfo.price) : ''}
                    underlineColorAndroid="transparent"
                    placeholder="Preço"
                    keyboardType="numeric"
                    onChangeText={(text) => {
                      setProductInfo({
                        ...productInfo,
                        price: text,
                      });
                    }}
                    onSubmitEditing={() => {}}
                  />
                </View>
              </View>


            </ScrollView>

            <View style={styles.actionButtons}>
              <TouchableOpacity
                onPress={() => { navigation.goBack(); }}
                style={{ paddingHorizontal: 15, paddingVertical: 10 }}
              >
                <Text style={{
                  fontSize: 18, marginHorizontal: 10, color: '#FF404A', textTransform: 'uppercase',
                }}
                >
                  Cancelar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { storeProduct(); }}
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  backgroundColor: '#FF404A',
                  borderRadius: 5,
                }}
              >
                <Text style={{
                  fontSize: 18, marginHorizontal: 10, color: '#fff', textTransform: 'uppercase',
                }}
                >
                  Salvar
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        )}
      </View>
    </View>
  );
}
