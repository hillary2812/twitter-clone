import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Hillary Macwan",
      username: "jkiddu",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://lh3.googleusercontent.com/ogw/ADGmqu_0bRjSVW-MP5ETxGYxmFRrZUOUouO18FF8NlaXwg=s32-c-mo",
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="what's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__inputImage"
          placeholder="Enter image URL"
          type="text"
        />
        <Button type="submit" onClick={sendTweet} className="tweetBox__Button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
