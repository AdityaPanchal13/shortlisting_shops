import React from "react";
import {connect} from 'react-redux'
import {startRegisterUser} from'../actions/userAction'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      phone: "",
      birthday: "",
      store: "",
      redirect: false,
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleDate=(date)=>{
      console.log(date)
      this.setState({birthday:date})

      
  }
  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.phone === "" ||
      this.state.birthday === ""
    ) {
      alert("All fields are required");
      
    }
    else if(
        this.state.name.length<6){
            alert("Name should be greater or equal to 6")
        }
        else if(
            this.state.phone.length!==10){
                alert("Phone number is not valid should be 10 character ")
            }
        
    else {
      const formData = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        birthday: this.state.birthday.toISOString(),
        store: this.state.store,
      };
      console.log(formData);
      const redirect=()=>{
        return this.props.history.push('/dashboard')
    }
    this.props.dispatch(startRegisterUser(formData,redirect))
    //   axios.post("http://localhost:4000/register", formData)
        // .then((response) => {
        //   if (response.data.error) {
        //     alert(response.data.error);
        //   } else {
        //     this.setState({
        //       name: "",
        //       email: "",
        //       phone: "",
        //       birthday: "",
        //       store: "",
        //       redirect: true,
        //     });
        //   }
        // })
        // .catch((error) => {
        //   console.log("reject", error);
        // });
    }
  }
  render() {
    // if (this.state.redirect) {
    //   return <Redirect to="/dashboard" />;
    // }
    return (
      <Container>
        <Row>
          <Col xs={12} md={3}></Col>
          <Col xs={12} md={6} >
            <h1> Add Customer</h1>
            <form onSubmit={this.handleSubmit}>
              <Form.Group >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <br />
              <Form.Group >
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Enter email"
                />
              </Form.Group>
              <br />
              <Form.Group >
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  placeholder="Enter phone number"
                />
              </Form.Group>
              <br />
              <Form.Group >
                <Form.Label>Birthday</Form.Label>
                <DatePicker selected={this.state.birthday} onChange={this.handleDate} maxDate={new Date()}/>
              </Form.Group>
              <br />
              <Form.Group >
                <Form.Label>Store</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  name="store"
                  value={this.state.store}
                  onChange={this.handleChange}
                >
                  <option>Choose...</option>
                  <option>Electronics</option>
                  <option>Toys</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <br />
            </form>
          </Col>
          <Col xs={12} md={3}></Col>
        </Row>
      </Container>
    )
  }
}
export default connect() (Register)
