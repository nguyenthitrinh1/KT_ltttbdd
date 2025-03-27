import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Payment() {
  const navigation = useNavigation();
  const [selectedMethod, setSelectedMethod] = useState("credit");

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      {/* Nút Back */}
      <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      {/* Tiêu đề*/ }
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Checkout 🏦</Text>
      <Text style={{ color: "gray", marginBottom: 20 }}>Including GST (18%)</Text>

      {/* Tổng tiền*/ }
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "green" }}>₹ 1,527</Text>

      {/* Chọn phương thức thanh toán*/ }
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            backgroundColor: selectedMethod === "credit" ? "#22c55e" : "#f0f0f0",
            borderRadius: 10,
            marginRight: 10,
          }}
          onPress={() => setSelectedMethod("credit")}
        >
          <FontAwesome name="credit-card" size={18} color={selectedMethod === "credit" ? "white" : "black"} />
          <Text style={{ marginLeft: 8, color: selectedMethod === "credit" ? "white" : "black" }}>Credit Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            backgroundColor: selectedMethod === "applepay" ? "#000" : "#f0f0f0",
            borderRadius: 10,
          }}
          onPress={() =>setSelectedMethod("credit")}
        >
          <FontAwesome name="apple" size={18} color={selectedMethod === "applepay" ? "white" : "black"} />
          <Text style={{ marginLeft: 8, color: selectedMethod === "applepay" ? "white" : "black" }}>Apple Pay</Text>
        </TouchableOpacity>
      </View>

      {/* Nhập số thẻ */}
      <Text style={{ marginTop: 20 }}>Card Number</Text>
      <View style={{ flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ddd", borderRadius: 10, padding: 10 }}>
        <TextInput style={{ flex: 1 }} placeholder="5261 4141 0151 8472" keyboardType="numeric" />
        <Image source={{ uri: "./assets/images/Master Card Logo.png" }} style={{ width: 30, height: 20 }} />
      </View>

      {/* Nhập tên chủ thẻ */}
      <Text style={{ marginTop: 20 }}>Cardholder Name</Text>
      <TextInput style={{ borderWidth: 1, borderColor: "#ddd", borderRadius: 10, padding: 10 }} placeholder="Christie Doe" />

      {/* Ngày hết hạn & CVV */}
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Text>Expiry Date</Text>
          <TextInput style={{ borderWidth: 1, borderColor: "#ddd", borderRadius: 10, padding: 10 }} placeholder="06 / 2024" />
        </View>
        <View style={{ flex: 1 }}>
          <Text>CVV / CVC</Text>
          <TextInput style={{ borderWidth: 1, borderColor: "#ddd", borderRadius: 10, padding: 10 }} placeholder="915" keyboardType="numeric" />
        </View>
      </View>

      {/* Nút thanh toán */}
      <TouchableOpacity style={{ marginTop: 30 }} onPress={() =>navigation.navigate('SuccessScreen')}>
      
        <LinearGradient colors={["#22c55e", "#16a34a"]} style={{ padding: 15, borderRadius: 10, alignItems: "center" }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>🔒 Pay for the order</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
