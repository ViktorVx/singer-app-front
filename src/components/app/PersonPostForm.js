import React from "react";
import { connect } from "react-redux";
const uuidv4 = require("uuid/v4");

class PersonPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Some",
      lastName: "Some",
      middleName: "Some",
      birthDate: "2012-12-12",
      passportNumber: "12121212",
      email: "vi@vi.ru",
      gender: "Male"
      // firstName: '',
      // lastName: '',
      // middleName: '',
      // birthDate: '',
      // passportNumber: '',
      // email: '',
      // gender: 'Male'
    };
  }

  handleChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState({ state });
  };

  handleSubmit = e => {
    e.preventDefault();
    const person = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      middleName: this.state.middleName,
      birthDate: this.state.birthDate,
      passportNumber: this.state.passportNumber,
      email: this.state.email,
      gender: this.state.gender,
      id: uuidv4()
    };
    const data = {
      person: person
    };
    this.props.dispatch({
      type: "ADD_PERSON",
      data
    });
    this.setState({
      firstName: "Some",
      lastName: "Some",
      middleName: "Some",
      birthDate: "2012-12-12",
      passportNumber: "12121212",
      email: "vi@vi.ru",
      gender: "Male"
      // firstName: '',
      // lastName: '',
      // middleName: '',
      // birthDate: '',
      // passportNumber: '',
      // email: '',
      // gender: 'Male'
    });
  };

  render() {
    return (
      <div>
        <h1>Person post form</h1>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            placeholder="Last name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            type="text"
            placeholder="First name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            type="text"
            placeholder="Middle name"
            name="middleName"
            value={this.state.middleName}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            type="date"
            placeholder="Birth date"
            name="birthDate"
            value={this.state.birthDate}
            onChange={this.handleChange}
          />
          <br />
          <select
            value={this.state.gender}
            name="gender"
            onChange={this.handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <br />
          <input
            required
            type="text"
            placeholder="Passport number"
            name="passportNumber"
            value={this.state.passportNumber}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default connect()(PersonPostForm);
