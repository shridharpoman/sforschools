import React, { Component } from 'react';
import './style.css';
import 'simple-line-icons/css/simple-line-icons.css';


export const FeaturesComponent = (props)=>{
  return <section className="features" id="features">
    <div className="container">
      <div className="section-heading text-center">
        <h2>About S for Schools</h2>
        <p className="text-muted">Check out what you can do !</p>
        <hr />
      </div>
      <div className="row">
        <div className="col-lg-8 my-auto">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-location-pin text-primary"></i>
                  <h3>Next Event</h3>
                  <p className="text-muted">Tyachi mahiti zxzxzxzxzxzxzxzxzxzxzxzxzx!</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-graduation text-primary"></i>
                  <h3>Stats</h3>
                  <p className="text-muted">Ikadche tikdche stats!</p>
                </div>
              </div>
              <span class="iconify" data-icon="" data-inline="false"></span>

              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-present text-primary"></i>
                  <h3>The Work We Do</h3>
                  <p className="text-muted">Aplya kamichi mahiti mcsmmsdmmdasdmasmdmsddmsd!</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-book-open text-primary"></i>
                  <h3>Why We do this </h3>
                  <p className="text-muted">kete mahantve ahea hyache hyachi mahiti dsdsjdajsdjasjdajsdjsdj!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
};