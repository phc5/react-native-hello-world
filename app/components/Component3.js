import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet, Switch } from 'react-native';

export default class Component3 extends Component {

	constructor() {
		super();
		this.state = {
			textValue:'Hello',
			switchValue: false
		}
	}

	onChangeText(value) {
		this.setState({
			textValue: value
		})
	}

	onSwitchChange(value) {
		this.setState({
			switchValue: value
		})
	}
  render() {
    return (
      <View style={styles.view}>
        <TextInput 
        	style={styles.input} 
        	placeholder="Stuff"
        	onChangeText={(value) => this.onChangeText(value)}
        />
        <Text>{this.state.textValue}</Text>

        <Switch
        	value={this.state.switchValue}
        	onValueChange={(value) => this.onSwitchChange(value)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	view: {
		marginTop: 100,

	},
	input: {
		height: 50
	}
})

AppRegistry.registerComponent('Component3', () => Component3);