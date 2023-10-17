import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <img src="./imgs/ESL-icon-klein-dunkelgrau.jpg" alt="" />
          <div>
            <ul>
              <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/news'>
              <li>News</li>
            </Link>
            <Link to='/'>
              <li>Videos</li>
            </Link>
            <Link to='/special'>
              <li>Special Deals</li>
            </Link>
            <Link to='/shop'>
              <li>Shop</li>
            </Link>
            </ul>
            <ul className="ul1">
              <li>
                <FaToggleOn />
              </li>
              <li>
                EN
                <FaAngleDown />
              </li>
            </ul>
          </div>
        </nav>
        <ul className="nav2">
          <li>Special Deals</li>
          <li>League of Legends</li>
          <li>CS:GO</li>
          <li>DOTA2</li>
          <li>Call of Duty</li>
          <li>Pokemon</li>
          <li>VALORANT</li>
          <li>Gaming</li>
        </ul>
      </header>
    );
  }
}

export default Header;
