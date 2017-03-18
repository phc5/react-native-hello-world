import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

export default class Component1 extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.message}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);