import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

// Screens
import Profile from "./src/screens/Profile";
import DonateList from "./src/screens/DonateList";
import BottomBar from "./src/components/BottomBar";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontLoaded] = useFonts({
    "Kanit-300": require("./src/fonts/Kanit-300.ttf"),
    "Kanit-300i": require("./src/fonts/Kanit-300i.ttf"),
    "Kanit-400": require("./src/fonts/Kanit-400.ttf"),
    "Kanit-400i": require("./src/fonts/Kanit-400i.ttf"),
    "Kanit-500": require("./src/fonts/Kanit-500.ttf"),
    "Kanit-500i": require("./src/fonts/Kanit-500i.ttf"),
    "Kanit-600": require("./src/fonts/Kanit-600.ttf"),
    "Kanit-600i": require("./src/fonts/Kanit-600i.ttf"),
    "Kanit-700": require("./src/fonts/Kanit-700.ttf"),
    "Kanit-700i": require("./src/fonts/Kanit-700i.ttf"),
    "Kanit-800": require("./src/fonts/Kanit-800.ttf"),
    "Kanit-800i": require("./src/fonts/Kanit-800i.ttf"),
  });
  if (!fontLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DonateList"
        screenOptions={{
          headerBackVisible: false,
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Kanit-400", fontSize: 20 },
        }}
      >
        <Stack.Screen component={Profile} name="Profile" />
        <Stack.Screen
          component={DonateList}
          name="DonateList"
          options={{
            title: "Donate",
          }}
        />
      </Stack.Navigator>
      <BottomBar />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
