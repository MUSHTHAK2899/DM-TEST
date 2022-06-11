import React, { PureComponent} from 'react'

export default class List extends PureComponent {
    state ={
        score:5,
        data:[
            {
                id:1,
                name:'mushthak',
                age:45
            },
            {
                id:2,
                name:'sheda',
                age:25
            },
            
        ]
    }
    incrementScore=()=>{
        this.setState({
            score:10
        });
    }
  render() {
      console.log(this.state.score);
    return (
      <div>
          <ul>
              {this.state.data.map((value,index)=>(
                      <li >{value.name} {value.id}</li>
                  
                  ))}
          </ul>
          <button onClick={this.incrementScore}>click</button>
      </div>
    )
  }
}
