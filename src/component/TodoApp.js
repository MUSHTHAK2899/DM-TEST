import React, { Component } from 'react'
import "./TodoApp.css";
export default class TodoApp extends Component {
  state={
    input:"",
    items:[]
  }
handleChange=(event)=>{
this.setState({
  input:event.target.value
})  
}

storeItems=(event)=>{
  event.preventDefault();
  const { input }=this.state; 
 
  this.setState({
    items:[...this.state.items, input],
    input:""
  });
}

deleteItem=(key)=>{
 
  this.setState({
    items:this.state.items.filter((data, index)=>index !== key)
  })
}

  render() {
    
    const { input ,items }=this.state; 

    return (
      <div className=''>
        <div className=' w-[350px] m-auto mt-8 text-center'>
        <form onSubmit={this.storeItems} className='rounded-lg bg-slate-100 p-5  shadow-lg shadow-gray-800'>
        <h1 className=' font-bold text-2xl mb-3 m-0 text-gray-400'>Todo App</h1>
          <input value={input} onChange={this.handleChange} className='outline-none rounded-lg w-full border-2 border-solid placeholder:bg-slate-50 placeholder:p-3 placeholder: font-mono box-border' placeholder='Enter Items...' type="text" />
          
        </form>
        <ul className='mt-6' >
          {items.map((data, index)=>( 
            <li   className='flex flex-1 justify-between bg-slate-100 font-serif rounded-lg p-2 text-gray-500 shadow-lg shadow-black mt-3' key={index}>{data}
           <span onClick={()=>this.deleteItem(index)} className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 ' viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
          </span>
          </li>
          ))};
         
        </ul>
        </div>
       
      </div>
    )
  }
}
