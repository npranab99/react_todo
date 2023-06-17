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
        <Link to="/">
          <div className="logout">
            <button onClick={logOut}>Log Out</button>
          </div>
        </Link>
      </>
    </div>
  );
}
