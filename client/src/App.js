import React from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { MainChat } from "./components/MainChat";
import { Profile } from "./components/Profile";
import { ChatContainer } from "./components/ChatContainer";

function App() {
  return (
    <div className="App">
      <div class="header">
        <Button text="Updates" />
        <div>
          <Button text="Session: 34 minutes" />
          <Button text="User: Ann Tsibulski" />
        </div>
      </div>
      <Header />
      <div className="header">
        <ChatContainer />
        <MainChat />
        <Profile />
      </div>
    </div>
  );
}

export default App;
