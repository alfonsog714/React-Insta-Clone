import React from "react";
import "./searchbar.css";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
  handleChanges = event => {
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="searchbar-whole">
        <div className="search-icons">
          <i className="fab fa-instagram fa-2x" />
        </div>
        <div className="search-field">
          <form>
            <input
              placeholder="Search"
              value={this.state.input}
              onChange={this.handleChanges}
              name="input"
              type="text"
            />
          </form>
        </div>
        <div className="nav-icons">c</div>
      </div>
    );
  }
}

export default SearchBar;
