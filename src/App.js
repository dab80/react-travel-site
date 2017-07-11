import React, { Component } from 'react';
import './App.css';

import NavBar from './components/navbar/NavBar';
import TravelCarousel from './components/travelcarousel/TravelCarousel'
import Countries from './components/countries/Countries'
import TablePanel from './components/tablepanel/TablePanel'
import TheTable from './components/thetable/TheTable'
import Footer from './components/footer/Footer';

//import Carousel from './components/carousel/Carousel';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <TravelCarousel />
        <Countries />
        <TablePanel />
        <TheTable />
        <Footer />
      </div>
    );
  }
}

export default App;
