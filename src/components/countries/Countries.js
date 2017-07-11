import React, { Component } from 'react';
import { Grid, Row, Thumbnail, Col } from 'react-bootstrap';
import Country from '../country/Country.js';
import './Countries.css';

class Countries extends Component {
  render() {
    return (
        <Grid className='grid'>
            <Row className='row'>
            <Country svgPathName={require("../../assets/spain_flag.svg")} countryName='Spain' countryURL='http://www.spain.info/en_US/' />
            <Country svgPathName={require("../../assets/italy_flag.svg")} countryName='Italy' countryURL='http://www.italia.it/en/home.html' />
            <Country svgPathName={require("../../assets/aruba_flag.svg")} countryName='Aruba' countryURL='http://www.arubatourism.com/' />
            <Country svgPathName={require("../../assets/chile_flag.svg")} countryName='Chile' countryURL='http://chile.travel/en/' />
            </Row>
        </Grid>
    );
  }
}
export default Countries;
