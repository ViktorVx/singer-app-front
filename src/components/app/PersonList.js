import React from "react";
import PersonPostForm from "./PersonPostForm";
import { connect } from "react-redux";

class PersonList extends React.Component {
  handleDeteleButtonClick = e => {
    e.preventDefault();
    const data = {
      id: e.target.value
    };
    this.props.dispatch({
      type: "DELETE_PERSON",
      data
    });
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
            {this.props.persons.map((item, i) => {
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
                      onClick={this.handleDeteleButtonClick}
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

export default connect()(PersonList);
