import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",

  };

  onKeyPressHandler = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handeFilter = (event) => {
    this.setState(() => ({ type: event.target.dataset.type }), () =>{
        this.props.searchMovies(this.state.search, this.state.type)
    });
  }

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            id="email_inline"
            type="search"
            className="validate"
            placeholder="search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyPress={this.onKeyPressHandler}
          />
        </div>
        <button
          className="btn search-btn"
          onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
        >
          Search
        </button>
        <div className="movie-type">
          <label>
            <input
              name="group1"
              type="radio"
              data-type="all"
              onChange={this.handeFilter}
              checked = {this.state.type === "all"}
            />
            <span>All</span>
          </label>

          <label>
            <input
              name="group1"
              type="radio"
              data-type="movie"
              onChange={this.handeFilter}
              checked = {this.state.type === "movie"}
            />
            <span>Movies only</span>
          </label>

          <label>
            <input
              name="group1"
              type="radio"
              data-type="series"
              onChange={this.handeFilter}
              checked = {this.state.type === "series"}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}
export { Search };
