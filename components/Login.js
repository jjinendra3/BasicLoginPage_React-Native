import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import mountain from "../assets/download.jpg";
import axios from "axios";
import Context from "../ContextAPI";

export default function Signup({ navigation }) {
  const context = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const response = await axios.post(
      "https://api.apptask.thekaspertech.com/api/users/login",
      {
        email: email,
        password: password,
      }
    );
    console.log(response.data);
    context.settoken(response.data.token);
    context.setuserdetails(response.data.user);
    navigation.navigate("MainPage");
  };

  return (
    <ParallaxScrollView
      parallaxHeaderHeight={430}
      renderForeground={() => (
        <View style={styles.headerContainer}>
          <Image source={mountain} style={styles.headerImage} />
        </View>
      )}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    marginBottom: 8,
  },
  profileSection: {
    flexDirection: "row",
    marginBottom: 10,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  imagePickerSection: {
    flexDirection: "column",
    marginLeft: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginVertical: 5,
    paddingHorizontal: 10,
  },
});
