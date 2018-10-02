import React, {Component} from 'react';
import { View, Text, Icon } from 'native-base';
import Head from './Header'
export default class Settings extends Component {
  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Icon name="settings" style={{ fontSize:24, color: tintColor }} />
    )
  }
  render(){
    return(
      <View>
        <Head 
        headerTitle="Settings"
        onPressAction = {() => this.props.navigation.openDrawer()}
        IconName = 'settings'
        />
        <Text>Settings Page</Text>
      </View>
    )
  }
}