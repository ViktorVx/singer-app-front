import React from "react";
import PersonPostForm from "./PersonPostForm";
import axios from 'axios';

class PersonList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      persons:[]
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8080/persons").then(res=> this.setState({persons: res.data}));
  }

  handleDeleteButtonClick = e => {

  };

  render() {
    return (
      <div>
        <PersonPostForm />
        <table>
          <caption>Список</caption>
          <thead>
            <tr>
              <th>Last name</th>
              <th>First name</th>
              <th>Middle name</th>
              <th>Birthday</th>
              <th>Gender</th>
              <th>Passport number</th>
              <th>E-mail</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.lastName}</td>
                  <td>{item.firstName}</td>
                  <td>{item.middleName}</td>
                  <td>{item.birthDate}</td>
                  <td>{item.gender}</td>
                  <td>{item.passportNumber}</td>
                  <td>{item.email}</td>
                  <td>
                    <button value={item.id}>edit</button>
                  </td>
                  <td>
                    <button
                      value={item.id}
                      onClick={this.handleDeleteButtonClick}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PersonList;
