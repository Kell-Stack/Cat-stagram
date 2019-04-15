import React, { Component } from 'react';
import Likes from './Likes.jsx';

class FeedItem extends Component {
    render() {
        return (
            <div className="FeedItem">

                <Likes />
            </div>
        );
    }
}

export default FeedItem;
