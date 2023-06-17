import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = sessionStorage.getItem("token");
    if (!login) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
}
export default ProtectedRoute;
