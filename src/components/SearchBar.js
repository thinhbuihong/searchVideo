import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      term:''
    };
  }

  onInputChange = (event) =>{
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit = (event) =>{
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }
  

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video search</label>
            <input type="text" value={this.state.term}
            onChange={this.onInputChange}></input>
          </div>
        </form>
      </div>
    )
  }
}
