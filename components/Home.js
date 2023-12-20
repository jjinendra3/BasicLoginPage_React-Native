import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet,Image } from "react-native";
import bg from '../assets/bg.png'
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loco</Text>
      <Text style={styles.subtitle}>Tracking your location in real-time with Loco.</Text>
      <Image source={bg} style={{height:'20%',width:'50%',marginVertical:30}}/>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.haveAccountContainer}>
        <Text style={styles.haveAccountText}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            // Handle navigation to the login page or any other action
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.loginLinkText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  signupButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  haveAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  haveAccountText: {
    marginRight: 4,
  },
  loginLinkText: {
    color: "#3498db",
    fontWeight: "bold",
  },
});
