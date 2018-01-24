import React from 'react';
import {View, Text, Video, asset} from 'react-vr';

class Movie extends React.Component {
	render() {
		return (
          <View style={{margin: 0.1, height: 2}}>
            <Video volume={0.6} loop={true} style={{height: 2}} source={asset('fireplace.mp4')} />  
          </View>
		);
	}
};

module.exports = Movie;