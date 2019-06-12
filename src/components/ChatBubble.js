import React from 'react';
import './ChatBubble.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const ChatBubble = (props) => {
  return (
    <div className="entry-bubble">
      <p className="entry-body">{props.messageBody}</p>
      <p className="entry-time"><Timestamp time={props.timeStamp}/></p>
    </div>
  );
};

ChatBubble.propTypes = {
  messageBody: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatBubble;
  