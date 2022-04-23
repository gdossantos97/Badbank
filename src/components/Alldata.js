import React, { Component } from 'react'
import { Table } from 'react-bootstrap'



// useContext to create table for passwords. 
// Look at todo list (should update/react to user entering new username)

export default class Alldata extends Component {
  render() {
    return (
      <div>
          <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>MIke</td>
                  <td>Hawkhurts</td>
                  <td>@lolllll</td>
                </tr>
              </tbody>
          </Table>
      </div>
    )
  }
}
