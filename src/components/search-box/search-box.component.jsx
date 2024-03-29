import { type } from "@testing-library/user-event/dist/type";
import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeHolder}
        onChange={this.props.onChangeHandler}
      ></input>
    );
  }
}

export default SearchBox;
