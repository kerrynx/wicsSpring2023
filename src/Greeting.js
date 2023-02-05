import logo from './exercyclelogo.png';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Quiz from './Quiz';
export default function Greeting(){
    return (
        <div className='greet'>
            <img src={logo} alt='logo'></img>
            <h1 className='title'>ExerCycle</h1>
            <h2 className='w_htwo'>Never Give Up the Grind.</h2>
            <h2 className='w_htwo'>Period.</h2>
            <Link to='/Quiz' className='start'>GET STARTED</Link>
            <div className='f'>
            <div className='fh'>
                <h2 className='hthree'>Already have an account?</h2>
            </div>
            <div className='fl'>
                <a>Login</a>
            </div>
            </div>
        </div>
    )
}