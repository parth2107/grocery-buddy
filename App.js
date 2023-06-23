import React, { useState, useEffect } from "react";
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import InitialScreen from './src/screens/InitialScreen/InitialScreen';

import { createStackNavigator } from '@react-navigation/stack'; //Insert screens into a stack

import db from "./src/firebase/config";

import UseRoute from "./src/router";

const AuthStack = createStackNavigator();

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

export default function App() {

const [user, setUser] = useState(null);

    useEffect(() => {
        db.auth().onAuthStateChanged((user) => {
          setUser(user);
        });
      }, []);

    const isLogin = db.auth().currentUser ? true : false;

    const routing = UseRoute(isLogin);
      
    return (
        <NavigationContainer>
            {routing}
        </NavigationContainer>
    )
}