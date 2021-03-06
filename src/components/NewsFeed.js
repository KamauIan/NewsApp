import React, { Component } from "react";
import { FlatList, View } from "react-native";
import NewsCard from "./NewsCard";
import Head from "./Header";
import { Icon } from "native-base";
import NewsDetail from "./NewsDetail";
import TechNews from "./TechNews";
import { createStackNavigator } from "react-navigation";

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=6ca34c820cce443f9ae46a62aef41555";

class NewsFeeds extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true }; //initialize states
    this.fetchNews = this.fetchNews.bind(this);
  }
  componentDidMount() {
    // call the fetch function immediately the component mounts
    this.fetchNews();
  }

  async fetchNews() {
    // Fetch news from news api url asynchronously
    await fetch(url)
      .then(response => response.json())
      .then(articles => this.setState({ articles, refreshing: false })) //set the state of articles[]
      .catch(err => {
        this.setState({ refreshing: false });
        console.log("The articles state is not set. Error: ", err);
      });
    console.log("The articles found were: ", this.state.articles);
    console.log(
      "\nAnd The first articles is: ",
      this.state.articles.articles[0].title
    );
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
    header: <Head headerTitle="News" IconName="menu" />
  };
  render() {
    return (
      <FlatList
        data={this.state.articles.articles}
        renderItem={({ item }) => (
          <NewsCard
            newscard={item}
            OpenDetails={() =>
              this.props.navigation.navigate(
                "NewsDetail", //OpenDetils is a prop created in NewsCard
                {
                  url: item.url,
                  title: item.title,
                  urlToImage: item.urlToImage,
                  content: item.content
                }
              )
            }
          />
        )}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
    );
  }
}

export default class NewsFeed extends Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    NewsFeeds: NewsFeeds,
    NewsDetail: NewsDetail,
    TechNews: TechNews
  },
  {
    initialRouteName: "NewsFeeds"
  }
);
