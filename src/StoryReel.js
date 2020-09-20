import React from 'react';
import './StoryReel.css';
import Story from "./Story";

function StoryReel() {
    return (
        <div className="storyReel">
        <Story
            image="/throne.jpeg"
            profileSrc="/arya.jpeg"
            title="Nav"
        />
        <Story
            image="/sisters.jpeg"
            profileSrc="/arya.jpeg"
            title="Nav"
        />
        <Story
            image="/ghost.jpeg"
            profileSrc="/arya.jpeg"
            title="Nav"
        />
        <Story
            image="/Drogon.jpeg"
            profileSrc="/arya.jpeg"
            title="Nav"
        />
        <Story
            image="/arya.jpeg"
            profileSrc="/arya.jpeg"
            title="Nav"
        />
    
        </div>
    )
}

export default StoryReel

