import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="first_sec">
        <div className="sign_in">Sign In</div>
        <div>
          <h2>Delight</h2>
        </div>
      </div>
      <div className="tabs">
        <div>
          <ul className="tabs_list">
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>news letter</div>
      </div>
    </div>
  );
};

export default Navbar;
