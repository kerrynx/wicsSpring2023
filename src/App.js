//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import DatePicker from 'react-date-picker'
import Greeting from './Greeting';
import Main from './Main';
function App() {

  //const [date, setDate] = useState(new Date())
  //<DatePicker onChange={date => setDate(date)} value={date}/>
  //<Greeting/>
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
