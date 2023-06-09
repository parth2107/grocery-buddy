import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import MapView from "react-native-maps";

//for customizing registration button:
const RegistrationButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.btnRegister}>
    <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
);

//for customizing login button:
const LocateMeButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.btnLogin}>
    <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
);

export default function InitialScreen({ navigation }) {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
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
        title="Locate ME"
        size="sm"
        onPress={() => navigation.navigate("Root")}
      ></LocateMeButton>
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
    justifyContent: 'center',
    marginVertical: 20,
    borderWidth: 2,
    // borderRadius: 25,
    borderColor: '#153759',

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
    paddingHorizontal: 12,
    backgroundColor: "#153759",
    borderRadius: 68,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 70,
  },
  //text in btn
  btnText: {
    fontSize: 18,
    color: "white",
    fontWeight: "400",
    alignSelf: "center",
  },

  imageLogo: {
    flex: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
