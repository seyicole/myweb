import React from 'react'
import {Link} from 'react-router-dom';

export default function Error() {
    return (
        <div className='col'>
            <h1><span>404 page</span></h1>
            <p>Sorry you're lost</p>
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}
