import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    // Local State or State is only this particular component can read
    this.state = {
      monsters: [], // https://jsonplaceholder.typicode.com/users
      searchField: "",
    }; // Always a JSON object
  }
  // The first time the app is renderded to the DOM (Happens once throughout the components life)
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  // Event Handler -> Some function to happen whenever the event happens
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredList = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 class="app-title">Monsters Rolodex</h1>
        <SearchBox
          className = {'monsters-search-box'}
          onChangeHandler={onSearchChange}
          placeHolder={"search monsters"}
        />
        <CardList monsters={filteredList} />
      </div>
    );
  }
}

export default App;

// Lifecycle Methods
// ->  ComponentDidMount , componentDidUpdate, componentDidUnmount

// When does react re-render? 1. When setState is called and when props are updated.
