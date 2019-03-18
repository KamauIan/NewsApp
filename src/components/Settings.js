import React, {Component} from 'react';
import { View, Text, Icon } from 'native-base';
import BackHeader from './BackHeader'
export default class Settings extends Component {
  
  render(){
    return(
      <View>
        <BackHeader 
        />
        <Text>Settings Page</Text>
      </View>
    )
  }
}