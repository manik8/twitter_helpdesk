import React from "react";

export const Header = () => {
  return (
    <div className="main-header">
      <div className="header2">
        <div>
          <h1>Conversations</h1>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Quick Search" />
          <i className="icon" class="fas fa-search" aria-hidden="true"></i>
        </div>

        <button className="filter">
          <i class="fas fa-exchange-alt"></i>
          <p>Filter</p>
        </button>
      </div>
      <div className="status">
        <i class="fas fa-circle"></i>
        <p className="online">Online</p>
        <i class="fas fa-sort-down"></i>
      </div>
    </div>
  );
};
