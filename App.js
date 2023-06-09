import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import InitialScreen from './src/screens/InitialScreen/InitialScreen';

import { createStackNavigator } from '@react-navigation/stack'; //Insert screens into a stack
import PaymentMethodScreen from './src/screens/PaymentMethod/PaymentMethodScreen';
import DeliveryDetailsScreen from './src/screens/DeliveryDetails/DeliveryDetailsScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import MyGroceriesScreen from './src/screens/MyGroceries/MyGroceriesScreen';
import HomeScreen from './src/screens/Home/HomeScreen';

const AuthStack = createStackNavigator();

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
        <Drawer.Screen name="Grocery Buddy" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Payment Method" component={PaymentMethodScreen} />
        <Drawer.Screen name="My Groceries" component={MyGroceriesScreen} />
        <Drawer.Screen name="Delivery Details" component={DeliveryDetailsScreen} />
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