import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Scan() {
  return (
    <View style={styles.container}>
      <Text style={styles.scanText}>Hinh anh</Text>
      <View >
        <Image source={require('./assets/images/download.jpg')} style={styles.image} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8F9FB' },
  scanText: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  image: { width: 100, height: 100 },
  addButton: { marginTop: 20, backgroundColor: '#007AFF', padding: 10, borderRadius: 5 },
  addButtonText: { color: 'white', fontSize: 16 },
});
