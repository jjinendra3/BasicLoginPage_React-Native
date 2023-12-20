import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import mountain from "../assets/download.jpg";
import ImagePicker from "./ImagePicker";
import user from "../assets/user.jpg";

export default function Signup({navigation}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(""); // Initial age value
  const [profilePic, setProfilePic] = useState(null);
  const handleSignup = () => {
    console.log("Signing up:", { name, email, password, age, profilePic });
    navigation.navigate('Home');
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
          {profilePic ? (
            <Image source={{ uri: profilePic }} style={styles.profilePic} />
          ) : (
            <Image source={user} style={styles.profilePic} />
          )}
          <View style={styles.imagePickerSection}>
            <Text>Profile Picture</Text>
            <ImagePicker setimg={setProfilePic} />
            <Button title="Capture from Camera" onPress={{}} />
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
        <Button title="Sign Up" onPress={handleSignup} />
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
