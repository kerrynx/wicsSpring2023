
import {useState} from 'react';
import logo from './exercyclelogo.png';
import {Link} from 'react-router-dom';
import './Hello.css';
//start date, how long
//optional: pain level
//how often excersise, how intense
//do you have a routine???
export default function Hello () {
    return(
        <div className='hello'>
            <h1 className = 'helloIntro'>Hello, Janet</h1>
            <h2 className = 'secondIntro'>Please answer these following questions so we can curate
                                            a routine that best suits you.</h2>
                <Link to='/Quiz/Hello' className = 'nextPageButton'>Next</Link>
        </div>
    )
}