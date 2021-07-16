import React from 'react';
import { Tweet } from '../tweet';

const TweetList = (props) => {
    return (
        <div>
            {
                // console.log("selam")
                props.tweets.map((tweet, index) => 
                (
                    <Tweet key={index} {...tweet} />
                ))
            }
        </div>
    );
}

export default TweetList;