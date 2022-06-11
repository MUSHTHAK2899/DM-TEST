import React,{ Component } from 'react';
import './App.css';
import About from './component/About';
import Hedder from './component/Hedder';
import TodoApp from './component/TodoApp';
import { BrowserRouter as Router,Route,Routes} from  "react-router-dom"

class App extends Component{
    
  render(){
    return( 
 <>
 <Router>
<Hedder/>
  <Routes>
    
    <Route path='/' element={<TodoApp/>}></Route>
   <Route path='/about' element={<About/>}></Route>
   </Routes>
 </Router>
 </>
  
    )
  }
}

export default App;
