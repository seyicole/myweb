import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div className='col'>
                <h1>Projects</h1>
                <p>Here are some of my professional and personal projects:</p>
                <h3>Web Designs</h3>
                <ul className='projects-list'>
                    <li>
                        <p>Fitness Template » <a href='https://befit-gymm.netlify.app' target='blank'><span>Befit</span></a></p>
                    </li>
                    <li>
                        <p>Artist portfolio Template » <a href='https://seyicole.github.io/Artist-portfolio/' target='blank'><span>Alaba arts</span></a></p>
                    </li>
                </ul>

                <h3>Web Apps</h3>
                <ul className='projects-list'>
                    <li>
                        <p>Entertainment & Lifestyle » <a href='https://habarigt.com/' target='blank'><span>Habari</span></a></p>
                    </li>
                    <li>
                        <p>Hotel & Resort » <a href='https://seyicole.github.io/resort' target='blank'><span>Resort</span></a></p>
                    </li>
                    <li>
                        <p>Junior Jobs » <a href='https://seyicole.github.io/junior-Jobs/' target='blank'><span>HackerJobs</span></a></p>
                    </li>
                    <li>
                        <p>Movie Collections » <a href='https://seyicole.github.io/Movie-collection/' target='blank'><span>Movies</span></a></p>
                    </li>
                </ul>
            </div>
        )
    }
}
