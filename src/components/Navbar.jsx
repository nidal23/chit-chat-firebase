import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chit Chat</span>
      <div className="user">
        <img
          src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <span>Mia</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
