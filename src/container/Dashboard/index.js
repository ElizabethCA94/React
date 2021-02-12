import React from "react";
import "./index.css";
import { Link } from "react-router-dom";


const DashoboardContainer = () => {
  return (
    <div class="lf-login-page">
      <label>Bienvenido, puedes crear quiz para tus estudiantes</label>
      <Link to = "/quiz/create"></Link>
    </div>
  );
};

export default DashoboardContainer;
