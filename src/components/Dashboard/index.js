import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import './index.scss';

function Dashboard () {
  return(
    <div className="pink">
      <NavBar />
      <div className="main-wrapper">
        <div className="source-code-container">
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Repositories</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="18"></textarea>
          </div>
          <button className="btn btn-outline-dark file-upload">Choose File<input type="file" className="file-input" name="file"/></button>
          <p>supported formats</p>
        </div>
        <div className="destination-code-container">
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Repositories</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="18"></textarea>
          </div>
          <button className="btn btn-outline-dark file-upload">Choose File<input className="file-input" type="file" name="file"/></button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;