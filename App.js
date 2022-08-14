import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { onAuthStateChanged, signInAnonymously, getAuth } from "firebase/auth";
import { auth } from "./firebase";

import AsyncStorage from "@react-native-async-storage/async-storage";

// Screens
import Profile from "./src/screens/Profile";
import DonateList from "./src/screens/DonateList";

// Components
import BottomBar from "./src/components/BottomBar";
import AddModal from "./src/components/AddModal";

const Stack = createNativeStackNavigator();

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [userID, setUserID] = useState("");
  // const auth = getAuth(app);
  const storeData = async (user) => {
    try {
      await AsyncStorage.setItem("uid", user.user.uid);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("uid");
      if (value !== null) {
        setUserID(value);
      } else {
        signInAnonymously(auth)
          .then((user) => {
            // console.log(user);
            storeData(user);
            setUserID(user.user.uid);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage + errorCode + " =>line 44");
          });
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  });
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
        <Stack.Screen
          name="Profile"
          children={() => <Profile userID={userID} />}
        />
        <Stack.Screen
          component={DonateList}
          name="DonateList"
          options={{
            title: "Donate",
          }}
        />
      </Stack.Navigator>
      <AddModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <BottomBar
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
