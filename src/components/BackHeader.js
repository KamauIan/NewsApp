import React, { Component } from 'react';
import { Header, Body, Title, Right, Button, Icon, Left } from 'native-base';
import { withNavigation, NavigationActions } from 'react-navigation';

class BackHeader extends Component  {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => {this.props.navigation.dispatch(NavigationActions.back())}}>
            <Icon name="arrow-back"  
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
export default withNavigation(BackHeader);
