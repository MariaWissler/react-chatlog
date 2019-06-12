import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
// format what is on chat entry by element
const ChatLog = (props) => {
  const chatLogComponents = props.messages.map((entry, i) => {// element and index
    return <ChatEntry key={i}//index, keeps the element 
    name={entry.sender}
    message={entry.body}
    timeStamp={entry.timeStamp}
    senderOne={props.senderOne}/>
  }); 

  return (
    <div className="chat-log">
      {chatLogComponents} 
     </div>
  );
};

ChatLog.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default ChatLog;