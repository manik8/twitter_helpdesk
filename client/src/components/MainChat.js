import React from "react";
import { Button } from "./Button";
export const MainChat = () => {
  return (
    <div className="mainchat">
      <div className="mainchat-header">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKr-4_3JHSaiKkrTwXGXdRXkpl5dl2o7EaGg&usqp=CAU" />
        </div>
        <div>Ea Tipene</div>
        <div className="room">Room: 102</div>
        <div className="dates">Oct 1 - Oct 12</div>
        <Button text="Create Task" />
      </div>
      <hr />
      <p className="today">Today</p>
      <div className="chat">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKr-4_3JHSaiKkrTwXGXdRXkpl5dl2o7EaGg&usqp=CAU" />
        <div className="time">
          <div style={{ padding: "6px" }}>
            <p>Hi there!</p>
            <p>I have a problem in my room, it needs to be cleaned</p>
            <img
              style={{ height: "100px", borderRadius: "0px" }}
              src="https://static.toiimg.com/photo/msid-71346066/71346066.jpg?resizemode=4&width=400"
            />
            <img
              style={{
                height: "100px",
                borderRadius: "0px",
                margin: "0px 10px",
              }}
              src="https://helvar.com/wp-content/uploads/2018/12/Hospitality-Hotel-Room-Helvar-T.jpg"
            />
            <img
              style={{ height: "100px", borderRadius: "0px" }}
              src="https://lh3.googleusercontent.com/proxy/q3Fl7YXchHsis2I-BN1inphFUCBuFY3ruN1PjCcCZau0-ze3NehSkKmnBhCteGPB5WlpISRBmKaRAgkkz4rQcJn8sjHUDI2tBcmjoPRWcW-WTUcf7xQLFdVatY6_nCHB0BaUp2YfwuQQd-C6aT35df3MC19xl-g"
            />
            <p>This is what I see! Not good!</p>
          </div>
          <div className="timing">10:34</div>
        </div>
      </div>
      <div class="chat2">
        <i class="fas fa-headset"></i>
        <p style={{ marginLeft: "20px" }}>
          <span style={{ color: "red", fontWeight: "bolder" }}>
            Ann Tsibulski
          </span>{" "}
          (you) assigned to this conversation
        </p>
      </div>
      <div className="chat">
        <img src="https://townsquare.media/site/71/files/2020/05/Screen-Shot-2020-05-19-at-7.17.13-AM.jpg?w=980&q=75" />
        <div className="time">
          <div style={{ padding: "6px" }}>
            <p>Hello dear Ea!</p>
            <p>
              Sorry for inconviences. I am sending our manager Maria Peterson to
            </p>
            <p>your room 102.</p>
          </div>
          <div
            style={{
              margin: "0 -2%",
              fontSize: "10px",
              color: "#a9a9a9",
              fontWeight: "bolder",
            }}
          >
            10:35(Reaction in 10 sec)
          </div>
        </div>
      </div>
      <div className="textfield">
        <img src="https://townsquare.media/site/71/files/2020/05/Screen-Shot-2020-05-19-at-7.17.13-AM.jpg?w=980&q=75" />
        <input type="text" placeholder="Reply..." />
        <i className="attachment" class="fas fa-paperclip"></i>
      </div>
    </div>
  );
};
