import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

function App() {
  const api = process.env.REACT_APP_CHAT_KEY;

  return (
    <ChatEngine
      height="100vh"
      projectID={api}
      userName="tolu"
      userSecret="123456"
      renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
