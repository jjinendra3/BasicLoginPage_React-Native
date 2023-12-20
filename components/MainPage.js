import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Alert,
  Linking,
} from "react-native";
import user from "../assets/user.jpg";
import * as Location from "expo-location";
const GeneralStatistics = ({ data }) => {
  return (
    <View style={styles.statisticsContainer}>
      <Text style={styles.statisticsTitle}>General Statistics</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.statisticItem}>
            <Text>{item.label}</Text>
            <Text style={styles.statisticValue}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

const MainPage = ({ navigation }) => {
  const [location, setLocation] = useState();
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      showLocationPermissionAlert();
      return;
    }

    let userLocation = await Location.getCurrentPositionAsync({});
    setLocation({
      long: userLocation.coords.longitude,
      lat: userLocation.coords.latitude,
    });
  };
  const showLocationPermissionAlert = () => {
    Alert.alert(
      "Location Permission Canceled",
      "Please grant location permission to enable this feature.",
      [
        {
          text: "OK",
          onPress: () => {
            Linking.openSettings();
            console.log("OK Pressed");
          },
        },
        {
          text: "Cancel",
          onPress: () => {
            navigation.navigate("Login");
            console.log("Cancel Pressed");
          },
          style: "cancel",
        },
      ]
    );
  };
  useEffect(() => {
    getLocation();
  }, []);
  const generalStatsData = [
    { id: 1, label: "Places Visited", value: "30" },
    { id: 2, label: "Hours Traveled", value: "150" },
    { id: 3, label: "Surveys Completed", value: "10" },
  ];
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={user} // Replace with the path to your profile photo
          style={styles.profilePhoto}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileCity}>New York</Text>
      </View>

      {/* Personal Information */}
      <View style={styles.personalInfoSection}>
        <View style={styles.inside}>
          <Text>Email: john.doe@example.com</Text>
          <Text>Age: 25</Text>
        </View>
      </View>

      {/* General Statistics */}
      <GeneralStatistics data={generalStatsData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  profileCity: {
    fontSize: 16,
    color: "gray",
  },
  personalInfoSection: {
    marginBottom: 20,
    backgroundColor: "#f8f8ff",
    borderRadius: 50,
    padding: 5,
    justifyContent: "center",
  },
  statisticsContainer: {
    borderTopWidth: 1,
    borderTopColor: "gray",
    paddingTop: 20,
  },
  statisticsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  statisticItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  statisticValue: {
    fontWeight: "bold",
  },
  inside: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 20,
  },
});

export default MainPage;
