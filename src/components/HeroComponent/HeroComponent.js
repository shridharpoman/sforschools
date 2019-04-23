import React, { Component } from 'react';
import './style.css';
import demoScreen1 from '../../demo-screen-1.jpg';

export const HeroComponent = (props)=>{
  return <header className="masthead">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">S for Schools is a Nonprofit Organisation that aims to Empower and support children to shape a brighter tomorrow!</h1>
            <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Become a Volunteer</a>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
         
        </div>
      </div>
    </div>
  </header>
};