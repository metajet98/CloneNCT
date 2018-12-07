import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput, Button,ScrollView,FlatList} from 'react-native';
import Helper from '../Helper.js'


export default class TestScreen extends Component<Props> {

	async getMp3()
	{
		Helper.getMp3Source();
	}
	componentWillMount()
	{
		this.getMp3();
	}



	render(){
		return(
				<View>
					<Text>TestScreen</Text>

				</View>

			)
	}

}
