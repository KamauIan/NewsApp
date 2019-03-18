import React, { Component } from 'react';
import { Header, Body, Title, Right, Button, Icon, Left } from 'native-base';
import { withNavigation } from 'react-navigation';

class Head extends Component  {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.openDrawer()} >
            <Icon name={this.props.IconName} 
            />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.headerTitle}</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='search'/>
          </Button>
        </Right>
      </Header>
    );
  }
}

export default withNavigation(Head)
