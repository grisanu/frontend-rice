import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import cn from 'classnames';
import * as Components from 'components';
import { logoutAndRedirect } from 'actions/auth';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export class Navigation extends Component {
  _handleLogOut = () => {
    this.props.logoutAndRedirect();
  };

  get navItems() {
    const { auth: { id, isAuthenticated } } = this.props;
    if (isAuthenticated) {
      return (
        <div className="dropdown-menu pull-right dropdown-menu-scale">
          <Link className="dropdown-item" to="/user/profile">Profile</Link>
          <div className="drop-down divider"></div>
          <a className="dropdown-item" onClick={this._handleLogOut}>Logout</a>
        </div>
      );
    }
    return;
  }

  render() {
      return (
        <div className="app-header white box-shadow">
          <div className="navbar">
              <ul className="nav navbar-nav pull-right">
                <Components.NavPopover className="nav-item dropdown">
                  <a className="nav-link clear">
                    <span className="avatar w-32">
                      <img src="https://i1.sndcdn.com/avatars-000171534452-maskpp-large.jpg" alt="..."></img>
                    </span>
                  </a>
                  {this.navItems}
                </Components.NavPopover>
              </ul>
              <div className="collapse navbar-toggleable-sm" id="collapse">
                <ul className="nav navbar-nav">
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/">
                      <img src="https://logos.keycdn.com/keycdn-icon-black.png"></img>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      )
  }
};


Navigation.propTypes = {
  auth: PropTypes.object,
  logoutAndRedirect: PropTypes.func,
};

export default connect(mapStateToProps, {logoutAndRedirect})(Navigation);
