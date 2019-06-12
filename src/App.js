
import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';

import ChatLog from './components/ChatLog';

class App extends Component {
  render() {
    const senderOne = chatMessages[0].sender;
    const senderTwo = chatMessages[1].sender;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chat Between {senderOne} and {senderTwo}</h1>
        </header>
        <main className="App-main">
          <ChatLog messages={chatMessages} senderOne={senderOne}/>
        </main>
      </div>
    );
  }
}

export default App;
