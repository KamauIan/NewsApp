
const fetchNews = async () => {
  await fetch(url).then(response => response.json())
    .then(articles => this.setState({ articles, refreshing: false })) //set the state of articles[]
    .catch((err) => {
      this.setState({ refreshing: false })
      console.log("The articles state is not set. Error: ", err)
    })
  console.log("The articles found were: ", this.state.articles)
  console.log("\nAnd The first articles is: ", this.state.articles.articles[0].title)
}

export default fetchNews;