import React from 'react';

import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <>
        <div className='col'>
           <p>Hi 👋🏿 I'm Seyi. I'm a Frontend Developer  and an open source contributor 
               based in Lagos, Nigeria.</p>

            <p>Currently work as a freelancer. Previously worked at <a href='https://swipemax.com/' target="blank"><span>Swipemax</span></a>, 
            <a href='https://www.amplify.ng/' target='blank'><span> Amplify Digital Agency</span></a> both in Lagos, Nigeria.</p>

            <p>I’m a product-focused engineer. Whether code, collaboration, 
                or process, my work is centered on moving a product forward. 
                I bring years of experience building for the web and a developed 
                understanding of technical, interpersonal, and organizational 
                systems to the teams I work with.</p>
                <p> Say hello:</p>
            <ul className='home-list'>
               
                <li>Email: <a href='mailto:seyicole01@gmail.com' target='blank'><span>seyicole@gmail.com</span></a></li>
                <li>Github: <a href='https://github.com/seyicole' target='blank'><span>seyicole</span></a></li>
                <li>Twitter: <a href='https://twitter.com/S3yicole' target='blank'><span>S3yicole</span></a></li>
                <li>LinkedIn: <a href='https://github.com/seyicole' target='blank'><span>Oluseyi Imanah</span></a></li>
            </ul>
                
        </div>
        </>
    )
}
