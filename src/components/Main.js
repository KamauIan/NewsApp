import React, { Component } from 'react';
import NewsFeed from './NewsFeed';
import Settings from './Settings';

import { SafeAreaView, ScrollView, View, Image, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';

export default class Main extends Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}
// const {width} = Dimensions.get('window');
const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
  <View style={{ height:150, backgroundColor:'#000', alignItems:'center', justifyContent:'center' }}>
    <Image source={{uri: 'https://i.stack.imgur.com/ILTQq.png'}} style={{height:120, width:120}}/>
  </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)
const AppDrawerNavigator = createDrawerNavigator({
  NewsFeed: NewsFeed,
  Settings: Settings
}, {
    contentComponent: CustomDrawerComponent,
    drawerWidth: 250
  }
)