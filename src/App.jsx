import React from "react";
import Notification from "./components/Notification/Notification";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";

function App() {
  const user = true;

  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
}

export default App;
