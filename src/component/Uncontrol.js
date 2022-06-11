import React, { Component } from 'react'

export default class Uncontrol extends Component {
  constructor(props){
    super(props);
this.state ={
    firstName:"",
    secondName:""
}
this.inputOne=React.createRef();
this.inputTWo =React.createRef();
}
onSubmit=()=>{
  console.log(this.inputOne.value);
  console.log(this.inputTWo.value);
}
  render() {
    return (
      <div>
         <h2>form Components</h2>
          <input ref={input =>this.inputOne=input} name='firstName'  className='border-2 border-black' type="text" />
          <input ref={input =>this.inputTWo=input} name='lastName' className='border-2 border-black' type="text" />
        <button type='button' onClick={this.onSubmit} className='bg-green-400 px-3 py-1 ml-2'>Submit</button>

      </div>
    )
  }
}
