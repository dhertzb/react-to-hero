import React from "react";
import Hamburguer from "../core/Hamburguer";

import "../../styles/sidebar.css";
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({
      isSidebarOpen: !this.state.isSidebarOpen,
    });
  }

  render() {
    let classes = this.state.isSidebarOpen
      ? "sidebar sidebar--expanded"
      : "sidebar sidebar--contracted";

    return (
      <div className={classes}>
        <div onClick={this.toggleSidebar} className="sidebar__hambuguer">
          <Hamburguer />
        </div>
      </div>
    );
  }
}

export default Sidebar;
