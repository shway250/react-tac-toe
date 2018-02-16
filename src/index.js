import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//   //don't need consturcotr anymore since square isn't using its own state
//   // constructor(props){
//   //   super(props)
//   //   this.state = {
//   //     value: null
//   //   }
//   // }

//   render() {
//     return (
//       <button className="square" onClick={()=>this.props.onClick()}>{/*add a click event listener to button*/}
//         {/*this.props.value ---the prop from the render square function*/}
//         {/*this.state.value*/}
//         {this.props.value}{/*changing this back to props sine my state is being sen as props from Board*/}

//       </button>
//     );
//   }
// }

function Square(props){//making a functional component sicne we don't need state
  return(
    <button className="square" onClick={props.onClick()}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  ///lifting state from button to board
  constructor(props){
    super(props)
    this.state = {
      squares = Array(9).fill(null),
      xIsNext = true
    }
  }

  //function that changes state of squares
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({squares: squares});
    xIsNext: !this.state.xIsNext;
  }

  //sending state as a prop to square
  renderSquare(i) {
    return (
    <Square 
      value={this.state.squares[i]}//added prop
      onClick={()=>this.handleClick(i)}//passing down a function to handle click to square
    />);
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));