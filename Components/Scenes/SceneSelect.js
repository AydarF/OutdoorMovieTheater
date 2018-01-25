import React from 'react';
import {View, Text, VrButton} from 'react-vr';

import SceneSelectMenu from './Layouts/SceneSelectMenu.js';

class SceneSelect extends React.Component {
	render() {
		return (
          <SceneSelectMenu text={this.props.text} buttonText={this.props.buttonText}/>
		);
	}
};

module.exports = SceneSelect;