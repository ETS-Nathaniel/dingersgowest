import React from 'react';

function Nav () {
  return (
    <div>
      <a class="menu-toggle rounded" href="#page-top">
        <i class="fas fa-bars"></i>
      </a>
      <nav id="sidebar-wrapper">
        <ul class="sidebar-nav">
          <li class="sidebar-brand">
            <a class="js-scroll-trigger" href="#page-top">Dingers Go West</a>
          </li>
          <li class="sidebar-nav-item">
            <a class="js-scroll-trigger" href="#page-top">Home</a>
          </li>
          <li class="sidebar-nav-item">
            <a class="js-scroll-trigger" href="#about">Where Are We?</a>
          </li>
          <li class="sidebar-nav-item">
            <a class="js-scroll-trigger" href="#services">Itinerary</a>
          </li>
          <li class="sidebar-nav-item">
            <a class="js-scroll-trigger" href="#portfolio">Photos</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav