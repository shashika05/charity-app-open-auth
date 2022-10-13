import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { signInAnonymously } from "firebase/auth";
import { auth, db } from "./firebase";
import { ref, child, get, set } from "firebase/database";

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
  const [loading, setLoading] = useState(true);
  const [userID, setUserID] = useState("");
  const [userData, setUser] = useState({});

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("uid", userID);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };
  const userHandle = async () => {
    try {
      const uid = await AsyncStorage.getItem("uid");
      if (uid !== null) {
        setUserID(uid);
        getData();
      } else {
        signInAnonymously(auth)
          .then((user) => {
            // console.log(user);
            setUserID(user.user.uid);
            storeData();
            set(ref(db, `users/${userID}`), {
              textSample: "User Added",
              uid: userID,
            });
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

  const getData = () => {
    const dbRef = ref(db);
    get(child(dbRef, `users/${userID}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    userHandle();

    /////
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
          children={() => <Profile userData={userData} />}
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
