import React, { Component } from 'react';
import { AppRegistry, Text, View, ListView, StyleSheet } from 'react-native';

const users = [
	{name: 'Paul Chong'},
	{name: 'Test User1'},
	{name: 'Test User2'},
	{name: 'Test User3'}
]

export default class Component4 extends Component {
	constructor() {
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			userDataSource: ds.cloneWithRows(users)
		}
	}

	renderRow(user) {
		return (
			<View style={styles.row}>
				<Text style={styles.text}>{user.name}</Text>
			</View>
		);
	}

  render() {
    return (
      <ListView
      	dataSource={this.state.userDataSource}
      	renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 10,
		backgroundColor: '#f4f4f4',
		marginBottom: 3
	},
	text: {
		flex: 1
	}
})

AppRegistry.registerComponent('Component4', () => Component4);