import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";
import "./chat.css";

function Chat() {
  const [emoji, setEmoji] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmojiClick = (e) => {
    setText((prev) => prev + e.emoji);
    setEmoji(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              dolorem laboriosam fuga dolore nostrum recusandae error omnis
              voluptate doloribus sunt autem corporis nihil, corrupti quia
              accusamus nesciunt ab sed et?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              dolorem laboriosam fuga dolore nostrum recusandae error omnis
              voluptate doloribus sunt autem corporis nihil, corrupti quia
              accusamus nesciunt ab sed et?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              dolorem laboriosam fuga dolore nostrum recusandae error omnis
              voluptate doloribus sunt autem corporis nihil, corrupti quia
              accusamus nesciunt ab sed et?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              dolorem laboriosam fuga dolore nostrum recusandae error omnis
              voluptate doloribus sunt autem corporis nihil, corrupti quia
              accusamus nesciunt ab sed et?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              dolorem laboriosam fuga dolore nostrum recusandae error omnis
              voluptate doloribus sunt autem corporis nihil, corrupti quia
              accusamus nesciunt ab sed et?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg?crop=1.00xw:0.760xh;0,0.0587xh&resize=1200:*"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              dolorem laboriosam fuga dolore nostrum recusandae error omnis
              voluptate doloribus sunt autem corporis nihil, corrupti quia
              accusamus nesciunt ab sed et?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="botton">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          placeholder="Type a message..."
        />
        <div className="emoji">
          <img onClick={() => setEmoji(!emoji)} src="./emoji.png" alt="" />
          <div className="picker">
            <EmojiPicker
              theme="dark"
              searchPlaceHolder="Search"
              open={emoji}
              onEmojiClick={handleEmojiClick}
            />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default Chat;
