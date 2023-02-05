//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {useState} from 'react';
import Greeting from './Greeting';
import Main from './Main';
import Quiz from './Quiz';
import Hello from './/Hello';
function App() {

  //const [date, setDate] = useState(new Date())
  //<DatePicker onChange={date => setDate(date)} value={date}/>
  //<Greeting/>
  return (
    <Router className='routes'>
      <Route className='route' exact path='/' component={Greeting}/>
      <Route className='route' exact path='/Quiz' component={Quiz}/>
      <Route className ='route' exact path ='/Quiz/Hello' component = {Hello}/>
    </Router>
  );
}

export default App;
