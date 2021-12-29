import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './styles.css';

export default function AcessibilityMenu() {
  return (
    <div className="dropdown">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Acessibilidade
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
