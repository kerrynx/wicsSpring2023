import {useState} from 'react';
import logo from './exercyclelogo.png';
import {Link} from 'react-router-dom';
//start date, how long
//optional: pain level
//how often excersise, how intense
//do you have a routine???
export default function Quiz () {
    return(
        <div>
            <img src={logo} alt='logo'></img>
            <h1>Hello, please enter your name</h1>
            <Link to='/Quiz/Hello'>
                <form>
                    <input type='text'></input>
                </form>
            </Link>
        </div>
    )
}

