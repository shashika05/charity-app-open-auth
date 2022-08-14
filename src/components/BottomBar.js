import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const BottomBar = () => {
  const navigation = useNavigation();
  const [isDonateActive, setDonateActive] = useState(true);
  //   const [isProfileActive, setProfileActive] = useState(false);

  const onDonateListPress = () => {
    setDonateActive(true);
    // setProfileActive(false);
    navigation.navigate("DonateList");
  };

  const onProfilePress = () => {
    // setProfileActive(true);
    setDonateActive(false);
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[
          styles.btn,
          isDonateActive ? styles.btnActive : styles.btnInActive,
        ]}
        onPress={onDonateListPress}
      >
        <FontAwesome5
          name="donate"
          size={24}
          color={isDonateActive ? "#7db5f0" : "#1b2b64"}
        />
      </TouchableHighlight>
      <TouchableOpacity style={styles.middleBtn}>
        <FontAwesome5 name="plus" size={36} color="#1b2b64" />
      </TouchableOpacity>
      <TouchableHighlight
        style={[
          styles.btn,
          !isDonateActive ? styles.btnActive : styles.btnInActive,
        ]}
        onPress={onProfilePress}
      >
        <FontAwesome5
          name="user-alt"
          size={24}
          color={!isDonateActive ? "#7db5f0" : "#1b2b64"}
        />
      </TouchableHighlight>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: "row",
    backgroundColor: "#b1d5fa",
    alignItems: "center",
    // justifyContent: "center",
    justifyContent: "space-around",
    borderRadius: 100,
    marginTop: 12,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  btnActive: {
    backgroundColor: "#1b2b64",
  },
  btnInActive: {
    backgroundColor: "#7db5f0",
  },
  middleBtn: {
    width: 70,
    height: 100,
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "#1c9eee",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
});
