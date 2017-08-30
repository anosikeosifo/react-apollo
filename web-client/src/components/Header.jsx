import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { withRouter } from "react-router";

export default class Header extends Component {
  render() {
    return (
      <section className="component__header">
        <div className="component__wrap">
          <div className="brand__name">React-Apollo</div>
          <Link className="nav__link new" to="/create">
            new
          </Link>
        </div>
      </section>
    );
  }
}
