import React, {Component} from 'react';
import { Image, TouchableNativeFeedback } from 'react-native';
import { Card, CardItem, Text, Button, Icon, Left, Body } from 'native-base';

export default class NewsCard extends Component {
  render() {
    const {
      title,
      url,
      urlToImage,
      description
    }  = this.props.newscard;
    const defaultImg = require('../assets/default-news.png');
    return (
        <Card style={{ flex: 0 }}>
          <CardItem header>
            <Text>{title}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Image source={{ uri: urlToImage } || require('../assets/default-news.png')} style={{ resizeMode: "stretch", height: 200, width: '100%', flex: 1 }} />
              <Text>
                {description || 'Read More..'}
                </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: '#87838B' }}>
                <Icon name="logo-github" />
                <Text>1,926 stars</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
    );
  }
}