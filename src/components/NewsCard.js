import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text, Button, Icon, Left, Right, Body } from 'native-base';

export default class NewsCard extends Component {
  render() {
    const {
      title,
      url,
      urlToImage,
      description,
      publishedAt
    } = this.props.newscard;
    const defaultImg = 'https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg';
    return (
      <Card style={{ flex: 0 }}>
        <CardItem header>
          <Text>{title}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Image source={{ uri: urlToImage || defaultImg }} style={{ resizeMode: "stretch", height: 200, width: '100%', flex: 1 }} />
            <Text>
              {description}
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent 
            onPress={this.props.OpenDetails}
            textStyle={{ color: '#87838B' }}>
              <Icon name="eye" />
              <Text>Read More</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent 
            textStyle={{ color: '#87838B' }}>
              <Icon name="home" />
              <Text note>{publishedAt}</Text>
            </Button>
          </Right>
        </CardItem>
        
      </Card>
    );
  }
}