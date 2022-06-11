import React, { Component } from 'react'

export default class Forms extends Component {
    state={
        firstName:"",
        lastName:""
    }
    onHandleChange=(event)=>{
        console.log(event.target.value);
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onSubmit= ()=>{
        console.log(this.state);
    }
  render() {
    return (
      <div>
          <h2>form Components</h2>
          <input name='firstName' value={this.state.firstName} onChange={this.onHandleChange} className='border-2 border-black' type="text" />
          <input name='lastName' value={this.state.lastName} onChange={this.onHandleChange} className='border-2 border-black' type="text" />
        <button type='button' onClick={this.onSubmit} className='bg-green-400 px-3 py-1 ml-2'>Submit</button>

</div>
    )
  }
}
