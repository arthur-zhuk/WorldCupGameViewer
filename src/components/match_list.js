import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';

class MatchList extends Component {
  renderMatches(matchData) {
    return matchData.matches.map((match, i) => {
      return (
        <tr key={match.match_number}>
          <td>{match.home_team.country}</td>
          <td>{match.away_team.country}</td>
          <td>{match.location}</td>
          <td>{match.winner}</td>
          <td>{match.datetime}</td>
        </tr>
      );
    });
  }

  render() {
    if (typeof this.props.matches === 'string') {
      return <div>{this.props.matches}</div>
    }
    else if (this.props.matches.length === 0) {
      return <div>Please enter a country code to view World cup matches.</div>
    }
    else if (this.props.matches.loading) {
      return (
        <div>
          Loading...
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      );
    }
    return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Home</th>
              <th>Away</th>
              <th>Location</th>
              <th>Winner</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.renderMatches(this.props.matches)}
          </tbody>
        </table>
      );
    }
}

function mapStateToProps({ matches }) {
  return { matches };
}

export default connect(mapStateToProps)(MatchList);
