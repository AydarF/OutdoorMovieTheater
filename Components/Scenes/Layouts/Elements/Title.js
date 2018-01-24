import React from 'react';
import {Text, View, VrButton} from 'react-vr';

class Title extends React.Component {
  render() {
  	return (
      <View>
        <Text style={{
        	fontSize: 0.5,
        	fontWeight: '400',
        	textAlign: 'center',
        	textAlignVertical: 'center'
        }}>Outdoor Movie Theater
        </Text>
      </View>
  	);
  }
};

module.exports = Title;