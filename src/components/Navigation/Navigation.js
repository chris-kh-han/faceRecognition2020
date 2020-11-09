import React from "react";
import { Link } from "react-router-dom";



function Navigation({ isSignedIn, HasSignedIn }) {

  return (
    <nav className="flex justify-end">
      {!isSignedIn ? (
        <div>
          <Link to="/sign-in">
            <span className="dib f3 link dim black underline pa3 pointer tr no-underline">
              Sign In
            </span>
         </Link>
          <Link to="/register">
            <span className="dib f3 link dim black underline pa3 pointer tr no-underline">
              Register
            </span>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/">
            <span 
                className="dib f3 link dim black underline pa3 pointer tr no-underline"
                onClick={HasSignedIn}
            >
              Sign out
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
