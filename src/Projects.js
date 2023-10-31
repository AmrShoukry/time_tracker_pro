import './Projects.css'
import portfolioImage from './images/projects.jpg';
// import React, { useState } from 'react';


function setActive(e)
{
    let buttons = document.querySelectorAll('.projects .workingArea header button');
    let divs = document.querySelectorAll('.projects .workingArea .divs div');
    buttons.forEach(element => {
        element.classList.remove('active');
    });
    divs.forEach(element => {
        element.classList.remove('active');
    });


    e.target.classList.add('active');
    document.querySelector(`.projects .workingArea .${e.target.classList[0].split('-')[0]}-div`).classList.add('active');
}

const Projects = () => {
    
    return ( 
        <div className="projects">
            <section className='Introduction'>
                <div className="container">
                    <div className="content">
                        <div className="text">
                            <h1>Projects</h1>   
                            <p className="description">
                                Within this section, you have the flexibility to incorporate as many projects as you desire, and you also have the option to delete them at your discretion. Feel free to expand your projects as much as you wish, and don't hesitate to remove any projects that no longer align with your goals or requirements.
                            </p>
                        </div>
                        <img src={portfolioImage} alt="" />
                    </div>
                </div>
            </section>
            <section className='workingArea'>
                <header>
                    <button className='active-button active' onClick={(e) => setActive(e)}>Active</button>
                    <button className='completed-button' onClick={(e) => setActive(e)}>Completed</button>
                    <button className='uncompleted-button' onClick={(e) => setActive(e)}>Uncompleted</button>
                </header>
                <div className="divs">
                    <div className="active-div active">
                        <div className="container">
                            <h2>Current Active Projects: </h2>

                            <div className="projectsDiv">
                                <div className="project">
                                    <h3 className='name'>Creating the portfolio project on ALX</h3>
                                    <p className="description">For this project, I will be developing a new website using React. The website's primary objective is to assist individuals in effectively managing their time and projects.</p>
                                    <div className="time">
                                        <h5>From: &nbsp;<span>2023/11/01 - 07:14 AM</span></h5>
                                        <h5>To: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>2023/11/27 - 12:01 PM</span></h5>
                                    </div>
                                    <button className="delete">X</button>
                                </div>
                                <div className="project">
                                <h3 className='name'>Studying A new Technology</h3>
                                    <p className="description"></p>
                                    <div className="time">
                                        <h5>From: &nbsp;<span>2023/12/01 - 07:14 AM</span></h5>
                                        <h5>To: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>2023/12/07 - 12:01 PM</span></h5>
                                    </div>
                                    <button className="delete">X</button>
                                </div>
                                <div className="project">
                                <h3 className='name'>Studying A new Technology</h3>
                                    <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor est, ad laborum numquam quae. Quos perspiciatis expedita voluptatem amet.</p>
                                    <div className="time">
                                        <h5>From: &nbsp;<span>2023/12/01 - 07:14 AM</span></h5>
                                        <h5>To: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>2023/12/07 - 12:01 PM</span></h5>
                                    </div>
                                    <button className="delete">X</button>
                                </div>
                                <div className="project">
                                <h3 className='name'>Studying A new Technology</h3>
                                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias perspiciatis tempore sed exercitationem? Sapiente alias et quis itaque nemo facilis necessitatibus fugit minima, esse ea. Laudantium amet incidunt voluptate ea, dolor voluptatem atque ipsum quidem voluptatum at. Ipsa voluptatem reprehenderit eum labore fuga reiciendis ab consectetur officia maxime nulla. Labore ab maiores tempora molestiae, facilis et nostrum fuga ipsam vel adipisci magnam recusandae unde exercitationem molestias quam laudantium quas sunt. Atque aspernatur dolorem reprehenderit dicta sapiente laudantium excepturi eaque?</p>
                                    <div className="time">
                                        <h5>From: &nbsp;<span>2023/12/01 - 07:14 AM</span></h5>
                                        <h5>To: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>2023/12/07 - 12:01 PM</span></h5>
                                    </div>
                                    <button className="delete">X</button>
                                </div>

                            </div>

                            <button className="addProject">Add Project</button>
                        </div>
                    </div>
                    <div className="completed-div">
                        <div className="container">
                            <h2>Finished Projects: </h2>
                            <div className="projectsDiv">
                                <div className="project">
                                    <h3 className='name'>Creating the portfolio project on ALX</h3>
                                    <p className="description">For this project, I will be developing a new website using React. The website's primary objective is to assist individuals in effectively managing their time and projects.</p>
                                    <div className="time">
                                        <h5>From: &nbsp;<span>2023/11/01 - 07:14 AM</span></h5>
                                        <h5>To: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>2023/11/27 - 12:01 PM</span></h5>
                                    </div>
                                    <button className="delete">X</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uncompleted-div">
                        <div className="container">
                            <h2>Exceeded deadline Projects: </h2>
                            <div className="projectsDiv">
                                <div className="project">
                                    <h3 className='name'>Creating the portfolio project on ALX</h3>
                                    <p className="description">For this project, I will be developing a new website using React. The website's primary objective is to assist individuals in effectively managing their time and projects.</p>
                                    <div className="time">
                                        <h5>From: &nbsp;<span>2023/11/01 - 07:14 AM</span></h5>
                                        <h5>To: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>2023/11/27 - 12:01 PM</span></h5>
                                    </div>
                                    <button className="delete">X</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
     );
}
 
export default Projects;