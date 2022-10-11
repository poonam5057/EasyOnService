import * as React from 'react';
import Home from '../screens/Home';
import Booking from '../screens/Booking';
import Profile from '../screens/Profile';
import ChangePassword from '../screens/ChangePassword';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from 'app/screens/Product';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
    );
};
const BottomTabNavigation = () => {
    const theme = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                tabBarStyle: {
                    backgroundColor: theme.colors.accent,
                    borderRadius: 20,
                    position: 'absolute',
                    margin: 10,
                    marginBottom: 10,
                    alignItems: 'center',
                    height: 70,
                    justifyContent: 'center',
                },
            }}>
            <Tab.Screen
                name="Home"
                component={StackNavigation}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    headerStyle: { backgroundColor: theme.colors.primary },
                }}
            />
            <Tab.Screen
                name="Booking"
                component={Booking}
                options={{
                    tabBarLabel: 'Booking',
                    headerShown: false,
                    headerStyle: { backgroundColor: theme.colors.primary },
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="menu-book" color={color} size={size} />
                    ),
                    //tabBarBadge: 2,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-circle-outline" color={color} size={size} />
                    ),
                    headerStyle: { backgroundColor: theme.colors.primary },
                }}
            />
        </Tab.Navigator>
    );
};
export default BottomTabNavigation;
