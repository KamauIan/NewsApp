import React, { Component } from 'react';
import { Header, Body, Title, Right, Button, Icon, Left } from 'native-base'

export default class Head extends Component  {
  render() {
    // const {headerTitle, RightIconName} = this.props.Head
    return (
      <Header>
        <Left>
          <Button transparent onPress={this.props.onPressAction}>
            <Icon name={this.props.IconName}
            />
          </Button>
        </Left>
        <Body>
          <Title style={{ width: "75%" }}>{this.props.headerTitle}</Title>
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
