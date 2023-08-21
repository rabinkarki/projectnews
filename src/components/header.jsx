import React from "react";
import { useGlobalContext } from "./context";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { query, Searchquery } = useGlobalContext();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <>
      <div className="head-1">
        <h1>Tech News On The go</h1>
        <div>
          {isAuthenticated ? (
            <li>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                LogOut
              </button>
            </li>
          ) : (
            <li>
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </li>
          )}
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Search here"
            value={query}
            onChange={(e) => Searchquery(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};
export default Header;
