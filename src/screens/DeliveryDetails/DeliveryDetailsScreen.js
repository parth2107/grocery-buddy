
//important imports
import React, { Component } from 'react';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'; // importing components
import MapView from 'react-native-maps';

const ConfirmButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.btnSave}>
    <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
);

export default function DeliveryDetailsScreen() {

  const [mapRegion, setmapRegion] = useState({
    latitude: 43.65107,
    longitude: -79.347015,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return(
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">

    <View style={styles.inputContainer}>
        <View style={{ position: "relative", width: "100%" }}>
            <Text>Destination</Text>
            <Text style={styles.input}> 265 Yorkland Blvd #400, North York, ON M2J 1S5 </Text>
        </View>
        <View style={{ position: "relative", width: "100%"}}>
            <Text>Distance</Text>
            <Text style={styles.input}> 5 KM </Text>
        </View>
        <View style={{ position: "relative", width: "100%"}}>
            <Text>Estimated Price</Text>
            <Text style={styles.input}> $16.65 </Text>
        </View>
    </View>
    <View style={styles.mapContainer}>
        <MapView
          style={{ alignSelf: "stretch", height: "100%" }}
          region={mapRegion}
        />
      </View>
    <ConfirmButton
        title="Confirm"
        size="sm"
        onPress={() => navigation.navigate("Root")}
      ></ConfirmButton>
</KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  //for main view
container: {
  flex: 1,
  backgroundColor: "transparent",
  justifyContent: "space-between",
  alignContent: "center",
  flexDirection: "column",
},
inputContainer: {
  marginLeft: 20,
  marginRight: 20,
  marginTop: 20,
  width: '90%',
},
input: {
  marginTop: 15, 
  marginBottom: 15, 
  fontSize: 15, 
  color: "gray"
},
mapContainer: {
  maxHeight: 350,
  marginHorizontal: 20,
  borderWidth: 2,
  borderRadius: 25,
  borderColor: "#153759",
  overflow: "hidden",
  
},
//for button
btnSave: {
  maxWidth: 350,
  elevation: 19, //means shadow for btn
  paddingVertical: 10,
  paddingHorizontal: 40,
  backgroundColor: "#153759",
  borderRadius: 68,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 30,
  marginHorizontal: 20
  // margin: 10,
},
//text in btn
btnText: {
  fontSize: 16,
  color: "white",
  fontWeight: "400",
  alignSelf: "center",
},  
});