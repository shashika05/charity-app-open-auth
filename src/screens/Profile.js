import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { db } from "../../firebase";
import { ref, child, get, set } from "firebase/database";

export default function Profile({ userData }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    // const dbRef = ref(db);
    // get(child(dbRef, `users/${userID}`))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       setUser(snapshot.val());
    //     } else {
    //       console.log("No data available");
    //       set(ref(db, "users/" + userID), {});
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  });
  // console.log(user);
  return (
    <View style={styles.container}>
      <Text>{userData.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
