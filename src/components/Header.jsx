import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const usenevigate = useNavigate();

  function logOut() {
    sessionStorage.clear();
    usenevigate(`/`);
  }
  return (
    <div>
      <>
        <h1>Welcome !!</h1>
        <Link to="/">
          <button className="logout" onClick={logOut}>
            Log Out
          </button>
        </Link>
      </>
    </div>
  );
}
