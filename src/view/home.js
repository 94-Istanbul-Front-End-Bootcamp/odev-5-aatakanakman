import React, { Component } from "react";
import { Header } from "../container";
import { TweetForm } from "../component/tweetForm";
import { TweetList } from "../component/tweetList";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      tweetText: "",
      tweets: [],
    };
    this.onChangeTweetForm = this.onChangeTweetForm.bind(this);
    this.handleTweetSubmit = this.handleTweetSubmit.bind(this);
  }

  componentWillMount() {
    fetch("tweetData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ tweets: data });
      })
      .catch((err) => console.log(err));
  }

  onChangeTweetForm(event) {
    this.setState({ tweetText: event.target.value });
  }

  handleTweetSubmit() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    // eslint-disable-next-line no-extend-native
    console.log(Date.now());
    let newState = this.state;

    let newTweet = {
      name: localStorage.getItem("username"),
      username: localStorage.getItem("username"),
      dateTime: today,
      tweetContent: this.state.tweetText,
      replyCount: 0,
      retweetCount: 0,
      likeCount: 0,
    };

    newState.tweets.unshift(newTweet);

    newState.tweetText = "";

    this.setState({ ...newState });
  }

  render() {
    const { tweetText, tweets } = this.state;

    return (
      <div className="latestTweets">
        <Header title="Home" />
        <TweetForm
          tweetText={tweetText}
          onChangeTweetForm={this.onChangeTweetForm}
          handleTweetSubmit={this.handleTweetSubmit}
        />
        <div className="latestTweets__divisor" />
        {tweets.length > 0 ? (
          <TweetList tweets={tweets} />
        ) : (
          <span>Loading...</span>
        )}
      </div>
    );
  }
}

export default Home;
