import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Signup from './components/Signup';
import { StatusBar } from 'expo-status-bar';
const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <>
    <NavigationContainer>
<StatusBar/>
    <Stack.Navigator 
          screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={Signup}/>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
