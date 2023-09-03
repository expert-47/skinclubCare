import React from "react";
import "./index.css";
import { NavToggleIcon, NotificationBellIcon } from "_utils/_icons";
import { history } from "_utils/_helpers";

const Header = ({ secured, showToggleButton, toggleSideBar }) => {
  const todayDate = new Date();
  const day = todayDate.formattedDate({
    weekday: "long",
    day: "",
    month: "",
    year: "",
  });
  const [month, date] = todayDate
    .formattedDate({
      weekday: "",
      day: "numeric",
      month: "long",
      year: "",
    })
    .split(" ");

  const time = todayDate.formattedTime({ hour: "numeric", second: "" });

  return (
    <div className="header">
      {secured && (
        <div
          className={`sidebar-toggle ${showToggleButton ? "d-block" : ""}`}
          onClick={toggleSideBar}
        >
          <NavToggleIcon />
        </div>
      )}
      <div className="brand">
        <h1>SKINCLUB</h1>
        <span>COSMETIC DOCTORS</span>
      </div>
      <div className="right">
        <div className="date-time">
          <div className="date-box">
            <span className="day">{day}</span>
            {", "}
            <span className="date">{date}</span>{" "}
            <span className="month">{month}</span>
          </div>
          <div className="time-box">
            <span className="time">{time}</span>
          </div>
        </div>
        <div
          className="notification-bell"
          onClick={() => {
            localStorage.clear();
            history.navigate("/login");
          }}
        >
          <NotificationBellIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
