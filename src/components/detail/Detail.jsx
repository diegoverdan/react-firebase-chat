import React from "react";
import "./detail.css";

function Detail() {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor, sit amet consectetur.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg?crop=1.00xw:0.760xh;0,0.0587xh&resize=1200:*"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img className="icon" src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg?crop=1.00xw:0.760xh;0,0.0587xh&resize=1200:*"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img className="icon" src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg?crop=1.00xw:0.760xh;0,0.0587xh&resize=1200:*"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img className="icon" src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg?crop=1.00xw:0.760xh;0,0.0587xh&resize=1200:*"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img className="icon" src="./download.png" alt="" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  );
}

export default Detail;
