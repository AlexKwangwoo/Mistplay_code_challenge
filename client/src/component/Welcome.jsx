import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="Welcome_Box">
      <div className="Welcome_Title">Welcome To MistPlay Coding Challenge</div>
      <div className="Welcome_Link">
        <Link to={"/update"}>
          <div className="Common_Button Welcome_Upload">Update New Text</div>{" "}
        </Link>
        <Link to={"/search"}>
          <div className="Common_Button Welcome_Search">Search By Text</div>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
