import React, { Component } from 'react';
import { AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight } from 'react-native';

export default class Component5 extends Component {

	constructor() {
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			userDataSource: ds
		}
	}

	componentDidMount() {
		this.fetchUsers();
	}

	onPress(user) {
		this.props.navigator.push({
			id: 'component6',
			user: user
		})
	}

	renderRow(user) {
		return (
			<TouchableHighlight onPress={() => {this.onPress(user)}}>
				<View style={styles.row}>
					<Text style={styles.text}>{user.name}: {user.email}</Text>
				</View>
			</TouchableHighlight>
		);
	}

	fetchUsers() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					userDataSource: this.state.userDataSource.cloneWithRows(response)
				})
			})
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

AppRegistry.registerComponent('Component5', () => Component5);