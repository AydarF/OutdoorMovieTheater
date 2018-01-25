import React from 'react';
import {View, Text, VrButton} from 'react-vr';

import Title from './Elements/Title.js';
import Button from './Elements/Button';

class SceneSelectMenu extends React.Component {
	render() {
		return (
          <View style={{
          	flex: 1,
          	width: 3,
          	flexDirection: 'column',
          	alignItems: 'stretch',
          	layoutOrigin: [0.5,0.5],
          	transform: [{translate: [0,0,-5]}]
          }}>
            <Title text={this.props.text} />
            <Button buttonText={this.props.buttonText} />  
          </View>
		);
	}
};

module.exports = SceneSelectMenu;