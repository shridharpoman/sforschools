import React, { Component } from 'react';
import './style.css';

export const CallToActionComponent = (props)=>{
  return <section className="cta">
    <div className="cta-content">
      <div className="container">
        <h2>Stop waiting.<br />Start contributing.</h2>
        <p className="text-muted">India is 97th on world rank literacy rate!</p>
      </div>
    </div>
    <div className="overlay"></div>
  </section>
};