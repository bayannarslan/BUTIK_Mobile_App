import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  Pressable
} from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';


const QRcode: React.FC = () => {
  const [permissionResponse, requestPermission] = BarCodeScanner.usePermissions();
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState<string | null>(null);

  const handleBarCodeScanned = (scanningResult: BarCodeScannerResult) => {
    if (!scanned) {
      const { data } = scanningResult;
      setScanned(true);
      setData(data);
    }
  };

  if (!permissionResponse) {
    return <View />;
  }

  if (!permissionResponse.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.container]}
      >
        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />
      </BarCodeScanner>
      {data ? (
        <View style={styles.overlay}>
          <Text style={{ textAlign: 'center', color: '#EBEBEB', fontSize: 24 }}>
            {data}
          </Text>
          <Button
            onPress={() => {
              setScanned(false);
              setData(null);
            }}
            title="Scan Again"
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});

export default QRcode;