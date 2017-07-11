import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import TableRow from '../tablerow/TableRow.js';
import './TheTable.css';

class TheTable extends Component {
  render() {
    return (
        // <Table striped bordered condensed hover>
        <Table className='table' bordered condensed hover>
            <thead>
            <tr>
                <th>Destination</th>
                <th>Capital</th>
                <th>Official Language</th>
                <th>Population (aprox.)</th>
                <th> National Bird</th>
            </tr>
            </thead>
            <tbody>
              <TableRow Destination='Spain' Capital='Madrid' Language='Spanish' Population='46.77 million' Bird='Eagle' />
              <TableRow Destination='Italy' Capital='Rome' Language='Italian' Population='59.83 million' Bird='Bluebirds' />
              <TableRow Destination='Aruba' Capital='Oranjestad' Language='Dutch' Population='102,911' Bird='Aruban Burrowing Owl' />
              <TableRow Destination='Chile' Capital='Santiago' Language='Spanish' Population='17.62 million' Bird='Andean condor' />
            </tbody>
        </Table>
    );
  }
}
export default TheTable;


