import React from 'react';

function Header () {
  return (
  <header class="masthead d-flex">
    <div class="container text-center my-auto">
      <h1 class="mb-1">Dinger's Go West</h1>
      <h3 class="mb-5">
        <em>A squad rolling across the continent in search of shenanigans</em>
      </h3>
      <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">See More</a>
    </div>
    <div class="overlay"></div>
  </header>
  )
}

export default Header