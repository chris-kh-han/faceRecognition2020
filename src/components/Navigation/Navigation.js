import React from "react";
import { Link, useHistory } from "react-router-dom";



function Navigation({ isSignedIn, hasSignedOut, loadUserInitial, setLoadUser, setImageUrl }) {
  const history = useHistory();

  const loadingHomePage = () => {
    let path = "/";
    history.push(path);
  };

  const signedOut = () => {
    setLoadUser(loadUserInitial);
    loadingHomePage();
    hasSignedOut()
    setImageUrl('')
  }

  return (
    <nav className="flex justify-end">
      {!isSignedIn ? (
        <div>
          <Link to="/signin">
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
                onClick={signedOut}
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
