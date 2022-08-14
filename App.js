import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Profile from "./src/screens/Profile";
import DonateList from "./src/screens/DonateList";
import BottomBar from "./src/components/BottomBar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DonateList">
        <Stack.Screen
          component={Profile}
          name="Profile"
          options={{
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          component={DonateList}
          options={{
            headerBackVisible: false,
          }}
          name="DonateList"
        />
      </Stack.Navigator>
      <BottomBar />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
