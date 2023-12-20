import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import mountain from "../assets/download.jpg";
import user from "../assets/user.jpg";
import Context from "../ContextAPI";
import axios from "axios";
import ImagePicker from "./ImagePicker";
export default function Signup({ navigation }) {
  const context = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const { img, setimg } = context;
  const handleSignup = async () => {
    try {
      if (!img) {
        console.error("Profile picture is missing.");
        return;
      }

      const formdata = new FormData();

      formdata.append("name", name);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("age", age);
      formdata.append("profile_picture", {
        uri: img.uri,
        type: "image",
        name: "profilepic.jpg",
      });

      const response = await axios.post(
        "https://api.apptask.thekaspertech.com/api/users/register",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error during signup:", error);
    }
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
        <Text style={styles.title}>Signup</Text>

        <View style={styles.profileSection}>
          {img ? (
            <Image source={{ uri: img.uri }} style={styles.profilePic} />
          ) : (
            <Image source={user} style={styles.profilePic} />
          )}
          <View style={styles.imagePickerSection}>
            <Text>Profile Picture</Text>
            <ImagePicker setimg={setimg} />
            <Button
              title="Take Picture"
              onPress={() => {
                navigation.navigate("cam");
              }}
            />
          </View>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={setAge}
        />
        <Button title="Create Account" onPress={handleSignup} />
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
