import { createStackNavigator } from '@react-navigation/stack'; //Insert screens into a stack
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // TabBar

import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './Auth/LoginScreen/LoginScreen';
import RegistrationScreen from './Auth/RegistrationScreen/RegistrationScreen';
import InitialScreen from './screens/InitialScreen/InitialScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { signOut } from './shared/api/api-auth';

import PaymentMethodScreen from './screens/PaymentMethod/PaymentMethodScreen';
import DeliveryDetailsScreen from './screens/DeliveryDetails/DeliveryDetailsScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';
import MyGroceriesScreen from './screens/MyGroceries/MyGroceriesScreen';
import HomeScreen from './screens/Home/HomeScreen';

// createStackNavigator is used to create a stack like structure. 
//Whenever we navigate to a screen, it gets pushed to the stack and whenever we click the back button, 
//the screen pops off from the top of the stack.

// Inside the render function, we have added NavigationContainer components.

// Then we have added the Stack.Navigator component inside the NavigationContainer component.
// stack.Navigator contains all the screens using stack.Screen component. 
// It has multiple props. For now, we are using two props i.e. name and component.

const AuthStack = createStackNavigator();
// const Tab = createBottomTabNavigator(); // For tabBar

const Drawer = createDrawerNavigator();

const LogOutBtnPressed = () => {
    signOut();
};


{/* Add Drawer.Navigation to a function.*/}
function Root() {
return (
    <Drawer.Navigator>
        {/* <Drawer.Screen name="InitialScreen" component={InitialScreen} /> */}
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Payment Method" component={PaymentMethodScreen} />
        <Drawer.Screen name="My Groceries" component={MyGroceriesScreen} />
        <Drawer.Screen name="Delivery Details" component={DeliveryDetailsScreen} />
        <Drawer.Screen name="Logout" component={LogOutBtnPressed}/>
    </Drawer.Navigator>
);
}

export default function UseRoute(isAuth) {

    //for customizing registration button:
    const LogoutButton = ({ onPress }) => (
        <TouchableOpacity onPress={onPress} style={{padding:5}}>
            <Text style={{
                color: '#153759',
                fontWeight: '700',
                fontSize: 16,
            }}>Logout  </Text>
        </TouchableOpacity>
    );

    if (!isAuth) {
        return (
            <AuthStack.Navigator>
                <AuthStack.Screen
                    name="Initial"
                    component={InitialScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <AuthStack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <AuthStack.Screen
                    name="Registration"
                    component={RegistrationScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </AuthStack.Navigator>
        );
    }

    return (
        
          <AuthStack.Navigator>
          <AuthStack.Screen 
              name="Root" 
              component={Root}
              options={{ headerShown: false }} 
            />         
            </AuthStack.Navigator>
        
    );
}