import React from "react";

function NavBar () {
  return(
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
  <a className="navbar-brand" href="/">GitMigratr</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
};

export default NavBar;
