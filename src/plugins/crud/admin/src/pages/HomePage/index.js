/*
 *
 * HomePage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import pluginId from '../../pluginId';
import { request } from "@strapi/helper-plugin";
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    request(`/${pluginId}`, {method: 'GET'}).then(setEntries);
  }, []);

  return (
    <div>
      <h1>CRUD Plugin Example</h1>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(( entry, index ) => {
            return (
              <tr key={index}>
                <td>{entry.id}</td>
                <td>{entry.name}</td>
                <td>{entry.value}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default memo(HomePage);
