import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePieceStatus, updateScore } from './actions';
import { Board } from './components/Board';
import { Score } from './components/Score';
import { Title } from './components/Title';
import { IN_PLAY, NOT_PLAYED } from './constants';


class App extends Component {

  onStatusChange = (id, status) => {
    const params = { status };
    this.props.dispatch(togglePieceStatus({id, params}));
  }

  getScore = () => {
    const inPlay = this.props.tiles.filter(tile => tile.status === IN_PLAY);
    fetch(`http://localhost:8080/getScore?word=${inPlay.map(tile => tile.id).join('')}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        }
      }).then((json) => {
        this.props.dispatch(updateScore(json["score"]));
      });
  }

  render() {
    return (
      <div className="container">
        <Title />
        <Board tiles={ this.props.tiles } status={ IN_PLAY } onStatusChange={ this.onStatusChange } />
        <Board tiles={ this.props.tiles } status={ NOT_PLAYED } onStatusChange={ this.onStatusChange } />
        <Score score={ this.props.score } getScore={ this.getScore } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tiles: state.tiles,
    score: state.score
  }
};

export default connect(mapStateToProps)(App);
