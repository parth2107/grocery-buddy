import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import InitialScreen from '../grocery_buddy/src/screens/InitialScreen/InitialScreen';

import { createStackNavigator } from '@react-navigation/stack'; //Insert screens into a stack

const AuthStack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

{/* Add Drawer.Navigation to a function.*/}
function Root() {
  return (
      <Drawer.Navigator initialRouteName="InitialScreen">
        {/* <Drawer.Screen name="InitialScreen" component={InitialScreen} /> */}
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
      <AuthStack.Screen 
            name="Initial"
            component={InitialScreen}
            options={{
                headerShown: false,
            }}
        />
      <AuthStack.Screen 
          name="Root" 
          component={Root}
          options={{ headerShown: false }} 
        />         
        </AuthStack.Navigator>
    </NavigationContainer>
);
}