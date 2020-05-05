/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, Image, TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Feather, MaterialIcons } from '@expo/vector-icons';

import styles from './styles';
import PhoneImg from '../../assets/phone.png';

export default function ScanBarCode() {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isUsingCamera, setIsUsingCamera] = useState(true);
  const [barCodeNumber, setBarCodeNumber] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const searchForBarCode = () => {
    if (barCodeNumber) {
      alert(`Código de barras: ${barCodeNumber}`);
    }
    alert(barCodeNumber);
  };

  const resetScanned = () => {
    setBarCodeNumber('');
    setScanned(false);
  };

  const addProduct = (barCode) => {
    resetScanned();
    navigation.navigate('AddProduct', { barCode });
  };

  const handleBarCodeScanned = ({ data }) => {
    setBarCodeNumber(data);
    setScanned(true);
  };

  const handleCameraUse = () => {
    setIsUsingCamera(!isUsingCamera);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FF404A' }}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => { navigation.goBack(); }}
          >
            <Feather name="chevron-left" size={28} color="#ffffff" />
            <Text style={styles.buttonBackText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonRefresh}
            onPress={() => { resetScanned(); }}
          >
            <MaterialIcons name="loop" size={28} color="#ffffff" />
            <Text style={styles.buttonBackText}>Escanear</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerBar}>
          <Image source={PhoneImg} />
          <Text style={styles.headerBarText}>Cadastre o seu produto</Text>
        </View>

      </View>

      {isUsingCamera && (
      <View style={styles.barCodeScannerWrapper}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.barCodeScanner}
        >
          <View style={styles.barCodeFocused}>
            <View style={styles.borderTopLeft} />
            <View style={styles.borderTopRight} />
            <View style={styles.borderBottomLeft} />
            <View style={styles.borderBottomRight} />
            <TouchableOpacity
              style={styles.alternativeChoiceButton}
              onPress={() => { handleCameraUse(); }}
            >
              <Text style={styles.alternativeChoiceButtonText}>Digitar o código de barras</Text>
            </TouchableOpacity>
          </View>

        </BarCodeScanner>

        {scanned && (
        <View style={styles.barCodeScannedView}>
          <TouchableOpacity
            style={styles.scannedButton}
            onPress={() => { addProduct(barCodeNumber); }}
          >
            <Text style={styles.scannedButtonText}>
              Cadastrar produto
              {' '}
              {barCodeNumber}
            </Text>
          </TouchableOpacity>
        </View>
        )}
      </View>
      )}

      {!isUsingCamera && (
        <View style={styles.inputBarCodeView}>
          <View style={styles.inputBarCodeWrapper}>
            <Text style={styles.inputBarCodeLabel}>
              Código de barras
            </Text>
            <TextInput
              style={styles.inputBarCode}
              underlineColorAndroid="transparent"
              keyboardType="numeric"
              onChangeText={(text) => setBarCodeNumber(text)}
              onSubmitEditing={() => searchForBarCode()}
            />
          </View>

          <TouchableOpacity
            style={styles.switchToCamera}
            onPress={() => { handleCameraUse(); }}
          >
            <Text>Usar a câmera</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
