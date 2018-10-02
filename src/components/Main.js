import React, { Component } from 'react';
import NewsFeed from './NewsFeed';
import Settings from './Settings';
// import Head from './Header';
// import { Content, Container } from 'native-base';
import { SafeAreaView, ScrollView, View, Image, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';


export default class Main extends Component {
  render() {
    return (
      <Container>
        <Head />
      <Content>
      <AppDrawerNavigator />
      </Content>
      </Container>
    );
  }
}
