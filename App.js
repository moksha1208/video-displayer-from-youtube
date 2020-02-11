import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Videos from './screens/Videos';

const Navigator = createStackNavigator({
  home: {
    screen: Home
  },
  videos: {
    screen: Videos
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Navigator/>
    )
  }
}