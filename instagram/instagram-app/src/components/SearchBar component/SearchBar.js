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
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            alt="Instagram logo"
          />
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
        <div className="nav-icons">
          <i className="far fa-compass fa-2x" />
          <i className="far fa-heart fa-2x" />
          <i className="far fa-user fa-2x" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
