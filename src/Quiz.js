import {useState} from 'react';
import logo from './exercyclelogo.png';
import {Link} from 'react-router-dom';
//start date, how long
//optional: pain level
//how often excersise, how intense
//do you have a routine???
export default function Quiz () {
    return(
        <div className='quiz'>
            <img src={logo} alt='logo'></img>
            <h1 className = 'helloQuestion'>Hello, please enter your name</h1>
                <form>
                    <input type='text'></input>
                </form>
                <Link to='/Quiz/Hello'>Submit</Link>
        </div>
    )
}

