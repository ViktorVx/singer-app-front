import React from "react";
import Menu from "./Menu";
import Clock from "./Clock";
import Toggle from "./Toggle";
import PersonList from "./PersonList";
import NameForm from "./NameForm";
import Calculator from "./Calculator";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Clock />
        <Toggle />
        <NameForm />
        <Calculator />
        <PersonList persons={this.props.persons} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
