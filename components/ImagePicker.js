import { View, Button, Alert, StyleSheet, Image, Text } from "react-native";
import {
  useCameraPermissions,
  PermissionStatus,
  launchImageLibraryAsync,
} from "expo-image-picker";
import { useState, useEffect } from "react";
const Imager = ({ setimg }) => {
  const [first, setfirst] = useState("");
  useEffect(() => {
    if (first !== "") {
      setimg(first);
    }
  }, [first]);

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  const veryifycam = async () => {
    if (cameraPermissionInformation === PermissionStatus.UNDETERMINED) {
      const permissionres = await requestPermission();
      return permissionres.granted;
    }
    if (cameraPermissionInformation === PermissionStatus.DENIED) {
      Alert.alert(
        "Camera Permissions",
        "Please grant Camera Permissions to run the app."
      );
      return false;
    }
    return true;
  };
  const totaler = async () => {
    const permissions = await veryifycam();
    if (!permissions) {
      return;
    }
    let result = await launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setfirst(result.assets[0]);
      setimg(result.assets[0]);
    }
  };
  return (
    <View>
      <Button title="Select Image" onPress={totaler} />
    </View>
  );
};

export default Imager;
const styles = StyleSheet.create({
  preview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D4E2D4",
    borderRadius: 4,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
