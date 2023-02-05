import logo from './exercyclelogo.png';
export default function Greeting(){
    return (
        <div className='greet'>
            <img src={logo} alt='logo'></img>
            <h1 className='title'>ExerCycle</h1>
            <h2 className='w_htwo'>Never Give Up the Grind.</h2>
            <h2 className='w_htwo'>Period.</h2>
            <button className='start'>GET STARTED</button>
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