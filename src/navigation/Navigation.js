import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//import HomeStack from './HomeStack';
//import AboutStack from './AboutStack';
//import ContactStack from './ContactStack';
import Home from '../screens/home';
import About from '../screens/about';
import Contact from '../screens/contact'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="home" component={Home} options={{title:'Home'}}/>
            <Tab.Screen name="about" component={About} options={{title:'About'}}/>
            <Tab.Screen name="contact" component={Contact} options={{title:'Contact'}}/>
        </Tab.Navigator>
    );
}