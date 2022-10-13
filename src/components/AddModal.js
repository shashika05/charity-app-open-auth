import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddModal = ({ modalVisible, setModalVisible }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    console.log("Done.");
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Post your request</Text>
          <View style={styles.textInView}>
            <TextInput
              placeholder="Title"
              textContentType="name"
              name="title"
              onChangeText={setTitle}
              style={styles.TxtIn}
              value={title}
              keyboardType="default"
            />
          </View>
          <View style={styles.textInView}>
            <TextInput
              placeholder="Description"
              textContentType="name"
              name="description"
              onChangeText={setDescription}
              style={styles.TxtIn}
              multiline={true}
              numberOfLines={3}
              value={description}
              keyboardType="default"
            />
          </View>
          <TouchableOpacity onPress={clearAll} style={styles.middleBtn}>
            <FontAwesome5 name="plus" size={56} color="#1b2b64" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <AntDesign name="closecircleo" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  modalView: {
    margin: 10,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16,
    width: "100%",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeBtn: {
    position: "absolute",
    right: 8,
    top: 8,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Kanit-300",
  },
  textInView: {
    marginTop: 8,
    borderBottomWidth: 2,
    width: "100%",
    borderRadius: 24,
    borderColor: "#b1d5fa",
  },
  TxtIn: {
    margin: 4,
    paddingHorizontal: 4,
    width: "100%",
  },
  middleBtn: {
    marginTop: 16,
    width: 70,
    height: 70,
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 6,
    backgroundColor: "#7db5f0",
    borderRadius: 35,
  },
});

export default AddModal;

// m-2 px-2 h-24 w-full text-lg bg-transparent
