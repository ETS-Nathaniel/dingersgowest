import React from 'react';
import ReactDOM from 'react-dom';
import {Header, Nav, Mapper, Itinerary, Photos, Footer} from './components';
import './fonts.css';
import './origin/vendor/bootstrap/css/bootstrap.min.css';
import './origin/vendor/fontawesome-free/css/all.min.css';
import './origin/vendor/simple-line-icons/css/simple-line-icons.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <div id="mapper" />
      <Itinerary />
      <Photos />
      <Footer />
    </div>
  );
}

export default App;
