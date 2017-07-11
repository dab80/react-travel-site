import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './TablePanel.css';

class TablePanel extends Component {
  render() {
    return (
      <Panel id='tablepanel'>
        <h2>Some information about the places I would like to visit</h2>
      </Panel>
    );
  }
}
export default TablePanel;