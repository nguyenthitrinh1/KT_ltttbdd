import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path, Circle, Rect } from "react-native-svg";

const SuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path d="M15 18l-6-6 6-6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
      <Image source={require("./assets/images/Group 167.png")} style={{ width: 150, height: 150 }} />
      </View>

      <Text style={styles.title}>Payment Success, Yayy!</Text>
      <Text style={styles.subtitle}>We will send order details and invoice to your contact number and registered email.</Text>

      <TouchableOpacity>
        <Text style={styles.link}>Check Details →</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    padding: 10,
  },
  imageContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginHorizontal: 40,
    marginBottom: 20,
  },
  link: {
    color: "#6366F1",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6366F1",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SuccessScreen;
