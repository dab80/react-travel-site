import React, { Component } from 'react';
import { Thumbnail, Col } from 'react-bootstrap';
import './Country.css';

class Country extends Component {
  render() {
    return (
        <Col xs={3} md={2}>
            <Thumbnail src={this.props.svgPathName} alt={this.props.countryName}>
                <h3>{this.props.countryName}</h3>
                <a href={this.props.countryURL} target="_blank">{this.props.countryName} Tourism Site</a>
            </Thumbnail>
        </Col>
    );
  }
}
export default Country;



