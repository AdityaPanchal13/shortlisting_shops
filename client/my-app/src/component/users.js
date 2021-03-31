import React from "react";
import axios from "axios";
import { Table, Button,Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";

function Users(props) {
  return (
      <div>
       
          <Table striped bordered hover variant="light" responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Birthday</th>
                <th>Store</th>
              </tr>
            </thead>
            <tbody>
              {props.users.map(function (ele,i) {
                return (
                  <tr key={i}>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.phoneNumber}</td>
                    <td>{ele.birthday.substring(0, 10)}</td>
                    <td>{ele.store}</td>
                    
                  </tr>
                );
              })}
            </tbody>
          </Table>
      </div>
    )
  }

export default Users;
