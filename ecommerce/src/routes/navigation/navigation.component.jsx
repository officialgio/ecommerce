import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import './navigation.styles.scss';

// This is our top-level component
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            Sign in
          </Link>
        </div>
      </div>
      {/* Outlet will renders those components depending on the route */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
