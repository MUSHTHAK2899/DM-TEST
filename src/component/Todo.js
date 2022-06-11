import React, { Component } from 'react'

class Todo extends Component {
  state ={
    counter:0

  }
onIncrement=()=>{
  this.setState({
    counter: this.state.counter + 1
  })
};
onDecrement=()=>{
  this.setState({
    counter: this.state.counter - 1
  })
};

  render() {
    return (
         <div>
            
             <h2>{this.props.name}</h2>
             <h1>{this.state.counter}</h1>
             <button className='bg-purple-600 px-3 py-1 ' onClick={this.onDecrement}>-</button>
             <button className='bg-purple-300 px-2 py-1 ml-2' onClick={this.onIncrement}>+</button>
         </div>
    )
  }
}

export default Todo;

