import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const cartItems = [
  {
    id: '1',
    name: "Orange Juice",
    brand: "Lauren’s",
    price: 149,
    image: require("./assets/images/Rectangle-31.png"),
  },
  {
    id: '2',
    name: "Skimmed Milk",
    brand: "Baskin’s",
    price: 129,
    image: require("./assets/images/Rectangle-31(1).png"),
  },
  {
    id: '3',
    name: "Aloe Vera Lotion",
    brand: "Marley’s",
    price: 1249,
    image: require("./assets/images/Rectangle-45.png"),
  }
];

export default function Cart() {
    const navigation = useNavigation(); 
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₹ {item.price}</Text>
      </View>
      <View style={styles.quantityControls}>
        <TouchableOpacity style={styles.button}><Text>-</Text></TouchableOpacity>
        <Text style={styles.quantity}>2</Text>
        <TouchableOpacity style={styles.button}><Text>+</Text></TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart 👍</Text>
      <FlatList data={cartItems} keyExtractor={item => item.id} renderItem={renderItem} />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPrice}>₹ 1,527</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Payment')}>
        <Text style={styles.buttonText}>Proceed to checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8F9FB' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  itemContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, padding: 15, marginBottom: 10 },
  image: { width: 50, height: 50, borderRadius: 10 },
  itemDetails: { flex: 1, marginLeft: 15 },
  brand: { fontSize: 14, color: 'gray' },
  name: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 16, color: 'orange' },
  quantityControls: { flexDirection: 'row', alignItems: 'center' },
  button: { backgroundColor: '#ddd', padding: 5, borderRadius: 5 },
  quantity: { marginHorizontal: 10, fontSize: 16 },
  totalContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, paddingVertical: 10, borderTopWidth: 1, borderColor: '#ddd' },
  totalText: { fontSize: 18, fontWeight: 'bold' },
  totalPrice: { fontSize: 18, fontWeight: 'bold', color: 'orange' },
  checkoutButton: { backgroundColor: 'orange', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  checkoutText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});
