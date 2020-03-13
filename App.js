import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./src/screens/HomeScreen";
import AccountScreen from "./src/screens/AccountScreen";
import LibraryScreen from "./src/screens/LibraryScreen";
import SearchScreen from "./src/screens/SearchScreen";
import SongPlayingScreen from "./src/screens/SongPlayingScreen";
import NowPlayingFragment from "./src/fragments/NowPlayingFragment";


const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
    },
  }
);

const SongPlayingStack = createStackNavigator(
  {
    SongPlaying: { screen: SongPlayingScreen },
  },
  {
    defaultNavigationOptions: {
    },
  }
);

const NowPlayingStack = createStackNavigator(
  {
    NowPlaying: { screen: NowPlayingFragment },
  },
  {
    defaultNavigationOptions: {
    },
  }
);

const LibraryStack = createStackNavigator(
  {
    Library: { screen: LibraryScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#FFFFFF',
      title: 'Library',
    },
  }
);
const SearchStack = createStackNavigator(
  {
    Search: { screen: SearchScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#FFFFFF',
      title: 'Search',
    },
  }
);
const AccountStack = createStackNavigator(
  {
    Account: { screen: AccountScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#FFFFFF',
      title: 'Account',
    },
  }
);

const App = createBottomTabNavigator(
  {

    Home: { screen: HomeStack },
    Search: { screen: SearchStack },
    Library: { screen: LibraryStack },
    Account: { screen: AccountStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'Search') {
          iconName = 'ios-search';
        }
        else if (routeName === 'Account') {
          iconName = 'ios-person';
        }
        else if (routeName === 'Library') {
          iconName = 'ios-list';
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeBackgroundColor: '#000000',
      inactiveBackgroundColor: '#000000',
      activeTintColor: '#FFFFFF',
      inactiveTintColor: 'gray',
    },
  }
);
export default createAppContainer(App);