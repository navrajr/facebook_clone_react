import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            < MessageSender />

            < Post 
            profilePic= "/arya.jpeg"
            message=" Wow This Works!"
            timestamp="This is a timestamp"
            username = "Nav Randhawa"
            image = "/sisters.jpeg" /> 
            
            < Post 
            profilePic= "/arya.jpeg"
            message=" This is great"
            timestamp="This is a timestamp"
            username = "Nav Randhawa"
            image = "/Drogon.jpeg" />
            < Post
            profilePic= "/arya.jpeg"
            message=" Feeling Great"
            timestamp="This is a timestamp"
            username = "Nav Randhawa"
            image = "/ghost.jpeg" />  
        </div>
    )
}

export default Feed;
