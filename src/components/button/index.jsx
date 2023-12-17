import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  const { title, link } = props;
  return (
    <Link to={link} className="tf-button">
      {title}
      <span className="icon-arrow-right2"></span>
    </Link>
  );
}

export default Button;
