import React from 'react';
import './ChatEntry.css';
import ChatBubble from './ChatBubble';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
    if (props.name == "Vladimir"){
    return (
        <div className="chat-entry local"> 
        <p className="entry-name">{props.name}</p>
        <ChatBubble messageBody={props.message} timeStamp={props.timeStamp}/>
        </div>
    );
    }
    else {
    return (
        <div className="chat-entry remote"> 
        <p className="entry-name">{props.name}</p>
        <ChatBubble messageBody={props.message} timeStamp={props.timeStamp}/>
        </div>
    );
    }
};

ChatEntry.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  };
  
  export default ChatEntry;