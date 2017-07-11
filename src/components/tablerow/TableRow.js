import React, { Component } from 'react';
import {  } from 'react-bootstrap';
import './TableRow.css';

class TableRow extends Component {
  render() {
    return (
        <tr>
            <td>{this.props.Destination}</td>
            <td>{this.props.Capital}</td>
            <td>{this.props.Language}</td>
            <td>{this.props.Population}</td>
            <td>{this.props.Bird}</td>
        </tr>
    );
  }
}
export default TableRow;