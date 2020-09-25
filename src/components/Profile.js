import React from "react";
import { Button } from "./Button";

export const Profile = () => {
  return (
    <div className="profile">
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKr-4_3JHSaiKkrTwXGXdRXkpl5dl2o7EaGg&usqp=CAU" />
      </div>
      <div>
        <i class="fas fa-times"></i>
      </div>
      <div>
        <p>Ea Tipene</p>
        <p
          style={{ color: "#5EBC4D", fontWeight: "bolder", margin: "19px 6px" }}
        >
          Online
        </p>
      </div>
      <div className="contact">
        <div>
          <i class="fas fa-phone-alt"> Call</i>
        </div>
        <div style={{ marginLeft: "6px" }}>
          <i class="fas fa-envelope"> Email</i>
        </div>
      </div>
      <div>
        <div className="roominfo">
          <p style={{ color: "#a9a9a9", fontWeight: "bolder" }}>Room</p>
          <p>102</p>
        </div>
        <div className="roominfo">
          <p style={{ color: "#a9a9a9", fontWeight: "bolder" }}>Category</p>
          <p>Standard</p>
        </div>
        <div className="roominfo">
          <p style={{ color: "#a9a9a9", fontWeight: "bolder" }}>Country</p>
          <p>Canada</p>
        </div>
      </div>
      <hr />
      <div className="taskList">
        <div>Tasks</div>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div style={{ marginLeft: "20px", marginBottom: "9px" }}>
        <input type="checkbox" />
        <label style={{ marginLeft: "10px" }}>Clean up room.</label>
      </div>
      <div
        style={{ marginLeft: "20px", marginBottom: "9px", marginRight: "11px" }}
      >
        <input type="checkbox" />
        <label style={{ marginLeft: "10px" }}>
          Change linen and towels when{" "}
          <span style={{ marginLeft: "31px" }}>guests are out.</span>
        </label>
      </div>
      <div style={{ marginLeft: "20px", marginRight: "11px" }}>
        <input type="checkbox" />
        <label style={{ marginLeft: "10px" }}>
          Bring complimentary bottle of red{" "}
          <span style={{ marginLeft: "31px" }}>wine.</span>
        </label>
      </div>
      <div style={{ margin: "14px 30px" }}>
        <Button text="All Tasks" />
      </div>
    </div>
  );
};
