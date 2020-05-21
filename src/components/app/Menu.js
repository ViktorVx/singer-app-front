import React from "react";

class Menu extends React.Component {
  menu = (
    <ul className={"menu"}>
      <li>
        <a href="first">First page</a>
      </li>
      <li>
        <a href="first">Second page</a>
      </li>
      <li>
        <a href="first">Third page</a>
      </li>
    </ul>
  );

  render() {
    return this.menu;
  }
}

export default Menu;
