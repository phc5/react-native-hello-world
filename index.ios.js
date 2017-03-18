import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator } from 'react-native';

import Component1 from './app/components/Component1';
import Component2 from './app/components/Component2';
import Component3 from './app/components/Component3';
import Component4 from './app/components/Component4';
import Component5 from './app/components/Component5';
import Component6 from './app/components/Component6';

export default class hello_world extends Component {
  renderScene(route, navigator) {
    switch(route.id) {
      case 'component5': 
        return (<Component5 navigator={navigator} title="component5" />)
        break;
      case 'component6':
        return (<Component6 user={route.user} navigator={navigator} title="component6" />)
        break;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'component5'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}

AppRegistry.registerComponent('hello_world', () => hello_world);