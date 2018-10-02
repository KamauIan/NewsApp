import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Head from './Header'

export default class NewsDetail extends Component {
  static navigationOptions = {
    headerTitle: <Head
      headerTitle="News Feed"
      onPressAction={() => this.props.navigation.openDrawer()}
      IconName='menu'
    />
  }

  render() {
    const { navigation } = this.props;
    const url = navigation.getParam('url', 'NO-ID');
    const title = navigation.getParam('title', 'No title');
    const urlToImage = navigation.getParam('urlToImage', 'https://newsapi.org/v2/everything?q=Kenya&apiKey=6ca34c820cce443f9ae46a62aef41555');
    const content = navigation.getParam('content', 'no content found');
    
    
    return(
      <View>
        <Text>
          TItle: {JSON.stringify(title)}
        </Text>
      </View>
      
    )
  }
}