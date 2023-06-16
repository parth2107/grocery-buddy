
//important imports
import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'; // importing components
import { Avatar} from 'react-native-elements';

const SaveButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.btnSave}>
    <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
);

export default function ProfileScreen() {
    return(
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
  >
      <View style={styles.inputContainer}>
      <View style={{ alignItems: "center", width: "100%", marginBottom: 8 }}>
              <Avatar
                size="xlarge"
                rounded
                title="Image"
                avatarStyle={{
                    borderWidth: 1,
                    borderColor: 'green',
                    ...Platform.select({
                    android: {
                        borderTopWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: 0,
                    },

                    }),
                }}
            />
            </View>
          <View style={{ position: "relative", width: "100%", marginBottom: 8 }}>
              <Text>Full Name</Text>
              <TextInput
                  placeholder=''
                  // value={value}
                  // onChangeText={text => handleChangeTextInput(text, "password")}
                  // secureTextEntry={secureTextEntry}
                  style={styles.input}
              />
          </View>
          <View style={{ position: "relative", width: "100%"}}>
              <Text>Last Name</Text>
              <TextInput
                  placeholder=''
                  // value={value}
                  // onChangeText={text => handleChangeTextInput(text, "password")}
                  // secureTextEntry={secureTextEntry}
                  style={styles.input}
              />
          </View>
      </View>
      <SaveButton
          title="Save"
          size="sm"
          onPress={() => navigation.navigate("Root")}
        ></SaveButton>
  </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    //for main view
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
      margin: 20,
      width: '90%',
  },
  input: {
    textAlign: 'center',
    backgroundColor: 'white',
    // paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 10
  },
  //for button
  btnSave: {
    elevation: 19, //means shadow for btn
    paddingVertical: 10,
    paddingHorizontal: 60,
    backgroundColor: "#153759",
    borderRadius: 68,
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  //text in btn
  btnText: {
    fontSize: 16,
    color: "white",
    fontWeight: "400",
    alignSelf: "center",
  },  
  });