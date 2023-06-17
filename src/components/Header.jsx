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
          <div className="header">
            <button className="logout" onClick={logOut}>
              <img
                className="btn_image_logout"
                src="https://cdn-icons-png.flaticon.com/128/3596/3596141.png"
              />
            </button>
            <img
              className="profile"
              src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
            />
          </div>
        </Link>
      </>
    </div>
  );
}
