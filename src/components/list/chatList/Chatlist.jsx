import React, { useState } from "react";
import "./chatlist.css";

function Chatlist() {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search..." />
        </div>
        <img
          className="add"
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>User Name 2</span>
          <p>Last message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>User Name 2</span>
          <p>Last message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>User Name 2</span>
          <p>Last message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>User Name 2</span>
          <p>Last message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>User Name 2</span>
          <p>Last message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>User Name 2</span>
          <p>Last message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>User Name 2</span>
          <p>Last message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>User Name 2</span>
          <p>Last message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>User Name 2</span>
          <p>Last message</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>User Name 2</span>
          <p>Last message</p>
        </div>
      </div>
    </div>
  );
}

export default Chatlist;
