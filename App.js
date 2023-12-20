import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homer from "./components/Home";
import Signup from "./components/Signup";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import { StatusBar } from "expo-status-bar";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Homer" component={Homer} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Mainpage" component={MainPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
