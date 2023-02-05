//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {useState} from 'react';
import Greeting from './Greeting';
import Main from './Main';
import Quiz from './Quiz';
function App() {

  //const [date, setDate] = useState(new Date())
  //<DatePicker onChange={date => setDate(date)} value={date}/>
  //<Greeting/>
  return (
    <div className="App">
      <Greeting/>
    </div>
  );
}

export default App;
