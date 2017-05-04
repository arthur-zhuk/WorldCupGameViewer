import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMatches, toggleLoading } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { code: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ code: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.toggleLoading();
    this.props.fetchMatches(this.state.code);
    this.setState({ code: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="">
        <input
          placeholder="Enter Country Code Here"
          className="search-input"
          value={this.state.code}
          onChange={this.onInputChange}
          />
        <span className="">
          <button type="submit" className="hovering-button">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMatches, toggleLoading }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
