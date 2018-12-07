import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput, Button,ScrollView,FlatList} from 'react-native';
import Helper from '../Helper.js'

export default class SongPlayerScreen extends Component<Props> {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	};
	}
	render(){
		return(


				

				<View>
					<Text>{this.props.navigation.getParam('item').title}</Text>
					<Text>{this.props.navigation.getParam('mp3Source')}</Text>


				</View>

			)
	}

}
