import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class hello_world extends Component {
  render() {
    return (
      <View>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('hello_world', () => hello_world);