import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homer from "./components/Home";
import Signup from "./components/Signup";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Camera from './components/Camera'
import { useState } from "react";
const Stack = createNativeStackNavigator();
export default function App() {
  const [img, setimg] = useState(null)
  return (
    <>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator >
          <Stack.Screen name="Homer" component={Homer} options={{ headerShown: false }}/>
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} initialParams={{img:img,setimg:setimg}}/>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="MainPage" component={MainPage} options={{headerLeft: ()=>{
            return(
              <View></View>
            )
          },headerTitleAlign: "center",}}/>
          <Stack.Screen name="cam" component={Camera} initialParams={{setimg:setimg}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
