import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Title, Body } from 'native-base';
import { Image, Linking } from 'react-native';
import BackHeader from './BackHeader'


export default class NewsDetail extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null
  }

  render() {
    const { navigation } = this.props;
    const url = navigation.getParam('url', 'NO-ID');
    const title = navigation.getParam('title', 'No title');
    const urlToImage = navigation.getParam('urlToImage', 'https://newsapi.org/v2/everything?q=Kenya&apiKey=6ca34c820cce443f9ae46a62aef41555');
    const content = navigation.getParam('content', 'no content found');

    return (
      <Container>
        <Header>
        <Left>
          <Button transparent onPress = {() => this.props.navigation.goBack()}>
            <Icon name="arrow-back"  
            />
          </Button>
        </Left>
        <Body>
          <Title>News Details</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='search'/>
          </Button>
        </Right>
      </Header>
        <Content>
          <Card transparent style={{ flex: 0 }}>
            <CardItem header>
              <Left>
                <Thumbnail source={{ uri: urlToImage }} />
                <Body>
                  <Text>{title}</Text>
                  <Text note>Today</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{ uri: urlToImage }} style={{ height: 200, width: 500, flex: 1 }} />
                <Text>
                  {content.slice(0, -13)}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: '#87838B' }} onPress={() => Linking.openURL(url)}>
                  <Icon name="eye" />
                  <Text>View more in Website</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>

    )
  }
}