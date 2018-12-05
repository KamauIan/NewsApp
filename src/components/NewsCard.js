import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text, Button, Icon, Left, Right, Body } from 'native-base';
import { TouchableOpacity, View } from 'react-native'
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
      <TouchableOpacity
        onPress={this.props.OpenDetails}
      >
        <Card style={{ flex: 0 }}>
          <CardItem bordered header>
            <Text>{title}</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Image source={{ uri: urlToImage || defaultImg }} style={{ resizeMode: "stretch", height: 200, width: '100%', flex: 1 }} />
              <Text>
                {description}
              </Text>
            </Body>
          </CardItem>
          <CardItem style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Button transparent
              textStyle={{ color: '#87838B' }}>
              <Text note style={{ textAlign: "right", marginLeft: 'auto' }}>{publishedAt.substring(0, 10)}</Text>
            </Button>
          </CardItem>

        </Card>
      </TouchableOpacity>
    );
  }
}