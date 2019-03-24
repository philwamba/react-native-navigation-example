import React, { Component } from "react";
import {
  createStackNavigator, 
  createAppContainer
} from 'react-navigation';

import { HomeScreen, Profile, FeedScreen } from './components';

const AppStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Feed: FeedScreen,
    Profile: Profile
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "orange"
      }
    }
  }
);

const AppContainer = createAppContainer(AppStackNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;

