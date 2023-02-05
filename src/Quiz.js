import {useState} from 'react';
import logo from './exercyclelogo.png';
import {Link} from 'react-router-dom';
import './Quiz.css';
//start date, how long
//optional: pain level
//how often excersise, how intense
//do you have a routine???
export default function Quiz () {
    return(
        <div className='quiz'>
            <img src={logo} alt='logo'></img>
            <h1 className = 'helloQuestion'>Hello, please enter your name.</h1>
                <form>
                    <input type='text' className = 'textbox'></input>
                </form>
                <Link to ='/Quiz/Hello' className = 'submitButton'>Submit</Link>
        </div>
    )
}

