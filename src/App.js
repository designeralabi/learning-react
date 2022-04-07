import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import "./Person/Person.css";

// class Based Component
class App extends Component {
  state = {
    persons: [
      { name: "abdulkareem", age: 29 },
      { name: "buhari", age: 50 },
      { name: "Goodluck", age: 24 },
    ],

    showPersonCard: false,
  };

  buttonHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 10 },
        { name: "Muhammad buhari", age: 70 },
        { name: "Goodluck Emefiele Jonathan", age: 64 },
      ],
    });
  };

  changeHandler = (event) => {
    this.setState({
      persons: [
        { name: "abdulkareem", age: 11 },
        { name: event.target.value.trim(), age: 70 },
        { name: "Goodluck Emefiele Jonathan", age: 64 },
      ],
    });
  };

  toggleButtonHandler = () => {
    const doesShow = this.state.showPersonCard;
    this.setState({ showPersonCard: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "purple",
      color: "White",
      padding: "12px",
      border: "none",
      outline: "none",
      cursor: "pointer",
      marginRight: "5px",
    };

    let person = null;

    if (this.state.showPersonCard) {
      person = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.buttonHandler.bind(this, "abdulkareem")}
            changed={this.changeHandler}
          >
            My Hobbies: Coding
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.buttonHandler.bind(this, "john")}>
          Switch Name
        </button>
        <button style={style} onClick={this.toggleButtonHandler}>
          ToggleButtonHandler
        </button>
        {person}
      </div>
    );
  }
}

// function Based Components
// const app = (props) => {
//   const [oldStateArray, newStateArray] = useState({
//     persons: [
//       { name: "abdulkareem", age: 29 },
//       { name: "buhari", age: 50 },
//       { name: "Goodluck", age: 24 },
//     ],
//   });

//   const buttonHandler = () => {
//     newStateArray({
//       persons: [
//         { name: "abdulkareem Alabi", age: 10 },
//         { name: "Muhammad buhari", age: 70 },
//         { name: "Goodluck Emefiele Jonathan", age: 64 },
//       ],
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working</p>
//       <button onClick={buttonHandler}>Switch Name</button>
//       <Person
//         name={oldStateArray.persons[0].name}
//         age={oldStateArray.persons[0].age}
//       />
//       <Person
//         name={oldStateArray.persons[1].name}
//         age={oldStateArray.persons[1].age}
//         onClick = {buttonHandler}
//       >
//         My Hobbies: Coding
//       </Person>
//       <Person
//         name={oldStateArray.persons[2].name}
//         age={oldStateArray.persons[2].age}
//       />
//     </div>
//   );
// };

export default App;
