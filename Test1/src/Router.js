import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import TestScreen from "./Screens/TestScreen.js";
import SongPlayerScreen from "./Screens/SongPlayerScreen.js";
import HomeScreen from "./Screens/HomeScreen.js";






export const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    SongPlayer: SongPlayerScreen,
    Test:TestScreen,
    
  },
  {
    initialRouteName: "Home",
  }
);

export const AppContainer = createAppContainer(RootStack);


