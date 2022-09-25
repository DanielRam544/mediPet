import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ImageBackground } from "react-native";

//Screens
import HomeScreen from "./screens/HomeScreen"
import SettingsScreen from "./screens/SettingsScreen"
import StackScreen from "./screens/StackScreen"

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const HomeStackNavigation = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigation.Navigator
            initialRouteName="MediPet"
        >
            <HomeStackNavigation.Screen
            name="MediPet"
            component={HomeScreen}
            />
            
            <HomeStackNavigation.Screen
            name="Stack"
            component={StackScreen}
            />
        </HomeStackNavigation.Navigator>
    )
} 

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                tabBarActiveTintColor: 'purple',
            }}
        >
            <Tab.Screen 
            name="Home" 
            component={MyStack}
            options={{
                tabBarLabel: 'Pet',
                tabBarIcon: ({ colors, size}) => (
                    <MaterialCommunityIcons name="gamepad-square-outline" size={24} color="black" />
                ),
                tabBarBadge: 10,
                headerShown: false,
            }}
            />

            <Tab.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{
                tabBarLabel: 'Optiones',
                tabBarIcon: ({ color, size}) => (
                    <MaterialIcons name="pets" size={24} color="black" />
                ),
                headerShown: false,
                
            }}
            />

        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}