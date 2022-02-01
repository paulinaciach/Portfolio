import React from 'react'
import Typical from 'react-typical'
import './Profile.css'


export default function Profile(){
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='#'>
                            <i className="fa fa-linkedin-square"/>
                        </a>
                        <a href='#'>
                            <i className="fa fa-github-square"/>
                        </a>
                        </div>
                    </div>

                    <div className='profile-deatils-name'>
                        <span className='primary-text'>
                            {" "}
                                Hello, I'M <span className='highlited-text'>Paulina</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                    <span className='primary-text'>
                            {" "}
                                <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "IT Project Coordinator 🖥️",
                                        1000,
                                        "Junior Developer 🌐",
                                        1000,
                                        "IT Student 👩‍🎓",
                                        1000,
                                    ]}
                                />
                                </h1>
                                <span className='profile-role-tagline'>
                                Another flaw in the human character is that everybody wants
                                 to build and nobody wants to do maintenance. <b>I am always ready for both!</b>
                                </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me {" "}
                        </button>
                        < a href='paulina.pdf' download="Paulina Ciach.pdf">
                        <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>

    )
}