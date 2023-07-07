import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import MapView from "react-native-maps";

//for customizing registration button:
const RegistrationButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.btnRegister}>
    <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
);

const LocateMeButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.btnLogin}>
    <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
);

const SearchButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.btnSearch}>
    <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
);

export default function InitialScreen({ navigation }) {
  const [loading, postalCode] = useState("");

  const [mapRegion, setmapRegion] = useState({
    latitude: 43.65107,
    longitude: -79.347015,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={{ alignSelf: "stretch", height: "100%" }}
          region={mapRegion}
        />
      </View>

      {/* <RegistrationButton title="Register" size="sm" onPress={() => navigation.navigate('Registration')}></RegistrationButton> */}
      <LocateMeButton
        title='Locate ME'
        size='sm'
        onPress={() => navigation.navigate("Root")}
      ></LocateMeButton>
      <Text style={{ marginTop: 15, color: "gray", textAlign: "center" }}>
        OR
      </Text>
      <View style={styles.rowContainer}>
        <TextInput
          placeholder='Postal Code'
          title='Postal Code'
          value={postalCode}
          onChangeText={(text) => handleChangeTextInput(text, "password")}
          secureTextEntryStart={true}
          style={styles.input}
        />
        <SearchButton
          title='Search'
          size='sm'
          onPress={() => navigation.navigate("Root")}
        ></SearchButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //for main view
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "space-between",
    // padding:16 ,
    alignContent: "center",
    flexDirection: "column",
    paddingHorizontal: 25,
  },
  mapContainer: {
    flex: 20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: "#153759",
    overflow: "hidden",
  },
  //for button
  btnRegister: {
    flex: 1,
    elevation: 19, //means shadow for btn
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#21DA8F",
    borderRadius: 68,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  //for button
  btnLogin: {
    flex: 1,
    elevation: 19, //means shadow for btn
    paddingVertical: 10,
    // paddingHorizontal: 42,
    backgroundColor: "#153759",
    borderRadius: 68,
    alignItems: "center",
    justifyContent: "center",
  },
  //text in btn
  btnText: {
    fontSize: 16,
    color: "white",
    fontWeight: "400",
    alignSelf: "center",
  },

  imageLogo: {
    flex: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    textAlign: "center",
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    marginHorizontal: 15,
  },

  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 70,
    marginTop: 10,
  },

  btnSearch: {
    elevation: 19, //means shadow for btn
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#153759",
    borderRadius: 68,
    alignItems: "center",
    justifyContent: "center",
  },
});
