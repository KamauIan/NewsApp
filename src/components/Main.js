import React, { Component } from 'react';
import NewsFeed from './NewsFeed';
import Settings from './Settings';
import  Head from './Header';

import { SafeAreaView, ScrollView } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import TechNews from './TechNews';

export default class Main extends Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}
// const {width} = Dimensions.get('window');
const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#8993c1' }}>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)
const AppDrawerNavigator = createDrawerNavigator({
  NewsFeed: NewsFeed,
  TechNews: TechNews,
  Settings: Settings,
}, {
    contentComponent: CustomDrawerComponent,
    drawerWidth: 250,
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#3f51b5'
    }
  },
  
)
