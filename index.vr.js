import React from 'react';
import { AppRegistry, asset, Pano, Text, View, Sound, VideoPano } from 'react-vr';

import MainMenu from './Components/Scenes/MainMenu.js';

export default class OutdoorMovieTheater extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('fort-night.jpg')}/>
        <MainMenu />
      </View>
    );
  }
};

AppRegistry.registerComponent('OutdoorMovieTheater', () => OutdoorMovieTheater);
