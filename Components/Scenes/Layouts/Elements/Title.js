import React from 'react';
import {Text, View, Animated} from 'react-vr';
import { Easing } from 'react-native';

class Title extends React.Component {
  constructor() {
    super();
    this.state = {fade: new Animated.Value(1), slide: new Animated.Value(1.5)};
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(
        this.state.fade,
        {
          toValue: 0,
          duration: 2000,
          easing: Easing.ease
        }
      ),
      Animated.stagger(500, [
      Animated.timing(
        this.state.fade,
        {
          toValue: 1,
          duration: 2000,
          easing: Easing.ease
        }
      ),
      Animated.timing(
        this.state.slide,
        {
          toValue: 0,
          duration: 2000,
          easing: Easing.ease
        }
      )
     ]) 
   ]).start();
  }
 
  render() {
  	return (
      <View>
        <Animated.Text style={{
        	fontSize: 0.5,
        	fontWeight: '400',
        	textAlign: 'center',
        	textAlignVertical: 'center',
          opacity: this.state.fade,
          transform: [{translateY: this.state.slide}]
        }}>{this.props.text}</Animated.Text>
      </View>
  	);
  }
};

module.exports = Title;