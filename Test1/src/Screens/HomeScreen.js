import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput, Button,ScrollView,FlatList} from 'react-native';
const cheerio = require('cheerio-without-node-native')
import ListSong from '../component/list_song.js'
import Helper from '../Helper.js'


export default class HomeScreen extends Component<Props> {


  
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
  
    this.state = {
      searchSongList:[],
      input:'',
    };
    this.getSearchRespone=this.getSearchRespone.bind(this);
    this.playSong=this.playSong.bind(this);
  }

  async getSearchRespone() {


    this.setState({searchSongList:[]});
    //console.log('Helper tra ve',Helper.getSearchRespone(this.state.input));
    if(this.state.input!='')
    {
      this.setState({searchSongList:await Helper.getSearchRespone(this.state.input)});
    }
    
  }

  
  async playSong(item){
    
    console.log('Pressed Play Song',item.title);
    
    this.props.navigation.navigate('SongPlayer',{'item':item,'mp3Source':await Helper.getMp3Source(item.link)});
  }

  componentWillMount()
  { 
    
    //console.log('blabla4');
    //this.getSearchRespone();
    //this.getXmlUrl();
  }
  render() {
    return (
      <View>
        <View>
          <TextInput 
            onChangeText={(inputtext) => this.setState({input:inputtext})}
            value={this.state.input}
            />
          <Button 
            onPress={()=>{
              console.log('Button search pressed');
              this.getSearchRespone();
              
            }}
            title="Search"
            color="#841584"
            />
        </View>


        <FlatList
          data={this.state.searchSongList}
          keyExreactor={(x, i)=>i}
          renderItem={({item})=>
            <ListSong item={item} key={i} onPress={this.playSong}/>
          }>
          

        
        </FlatList>


      </View>
    );
  }
}

