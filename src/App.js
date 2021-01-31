import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";

function App() {
  const api = process.env.REACT_APP_CHAT_KEY;

  return (
    <ChatEngine
      height="100vh"
      projectID={api}
      userName="tolu"
      userSecret="123456"
    />
  );
}

export default App;
