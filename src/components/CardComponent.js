import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
// import { Entypo } from '@expo/vector-icons';

const CardComponent = () => {
  const [starGiven, setStarGiven] = useState(false);
  let [starCount, setStarCount] = useState(100);
  const name = "John Doe";
  const onStarPress = () => {
    if (!starGiven) {
      setStarCount(++starCount);
    } else {
      setStarCount(--starCount);
    }
    setStarGiven(!starGiven);
  };
  return (
    <View style={styles.containter}>
      <View style={styles.mainView1}>
        <View style={styles.mainView1Sub1}>
          <Image
            style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
            source={{
              uri: `https://ui-avatars.com/api/?name=${name}&size=512&background=random`,
            }}
          />
          <Text>{name}</Text>

          <TouchableOpacity style={styles.starBtn} onPress={onStarPress}>
            <AntDesign
              name={starGiven ? "star" : "staro"}
              size={20}
              color="black"
            />
            <Text style={{ fontSize: 18 }}> | </Text>
            <Text style={{ fontSize: 18 }}>{starCount}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainView1Sub2}></View>
      </View>
      <View style={styles.mainView2}>
        <View style={styles.locationBtn}>
          <Text>
            <Entypo name="location-pin" size={12} color="black" />
            Colombo
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  containter: {
    width: "98%",
    height: 200,
    margin: 4,
    backgroundColor: "skyblue",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  mainView1: {
    flexDirection: "row",
    // backgroundColor: "#3b3b3b",
    flex: 0.8,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  mainView2: {
    flexDirection: "row",
    // backgroundColor: "#7a7a3a",
    flex: 0.2,
    alignItems: "center",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  mainView1Sub1: {
    flex: 0.4,
    borderTopLeftRadius: 16,
    justifyContent: "space-around",
    alignItems: "center",
    // backgroundColor: "#3b3e2f",
  },
  mainView1Sub2: {
    flex: 0.6,
    borderTopRightRadius: 16,
    backgroundColor: "#efefef",
  },
  starBtn: {
    flexDirection: "row",
    backgroundColor: "gray",
    paddingHorizontal: 16,
    paddingVertical: 3,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "stretch",
  },
  locationBtn: {
    backgroundColor: "gray",
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
