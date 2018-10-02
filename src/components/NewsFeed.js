import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import NewsCard from './NewsCard';
import Head from './Header';
import { Icon } from 'native-base';

const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6ca34c820cce443f9ae46a62aef41555";

export default class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true }; //initialize states
    this.fetchNews = this.fetchNews.bind(this)
  }
  // call the fetch function immediately the component mounts
  componentDidMount() {
    this.fetchNews();
  }
  // Fetch news from news api url asynchronously
  async fetchNews() {
    await fetch(url).then(response => response.json())
      .then(articles => this.setState({ articles, refreshing: false })) //set the state of articles[]
      .catch((err) => {
        this.setState({ refreshing: false })
        console.log("The articles state is not set. Error: ", err)
      })
    console.log("The articles found were: ", this.state.articles)
    console.log("\nAnd The first articles is: ", this.state.articles.articles[0].title)
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Icon name="paper" style={{ fontSize:24, color: tintColor }} />
    )
  }

  render() {
    return (
      <View>
        <Head 
        headerTitle="News Feed"
        onPressAction = {() => this.props.navigation.openDrawer()}
        IconName = 'menu'
        />
      <FlatList
        data={this.state.articles.articles}
        renderItem={({ item }) => <NewsCard newscard={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
      </View>
    );
  }
}