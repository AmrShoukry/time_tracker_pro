import { useEffect, useState } from 'react';
import '../styles/Projects.css';
import portfolioImage from '../images/projects.jpg';
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getRequest, deleteRequest } from '../api/Requests';

function hasExccededDeadline(toTimeString) {
  const toTime = new Date(toTimeString);
  const now = new Date();
  return now > toTime;
}

function setActive(e) {
  let buttons = document.querySelectorAll(
    '.projects .workingArea header button'
  );
  let divs = document.querySelectorAll('.projects .workingArea .divs div');
  buttons.forEach((element) => {
    element.classList.remove('active');
  });
  divs.forEach((element) => {
    element.classList.remove('active');
  });

  e.target.classList.add('active');
  document
    .querySelector(
      `.projects .workingArea .${e.target.classList[0].split('-')[0]}-div`
    )
    .classList.add('active');
}

function removeProject(e) {
  let div = e.target.parentNode;
  let id = div.getAttribute('id').split('-')[1];
  deleteRequest(`http://localhost:8000/projects/${id}`);
  div.remove();
}

const Projects = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/projects')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((project) => {
          if (hasExccededDeadline(project['to'])) {
            project['late'] = 1;
          }
        });
        setData(data);
      });
  }, []);

  function getFinalString(fromGivenTime, toGivenTime) {
    const from = fromGivenTime.split('T');
    const to = toGivenTime.split('T');
    const fromDate = from[0];
    const toDate = to[0];
    let fromTime = from[1].split(':');
    let toTime = to[1].split(':');
    let fromHours = parseInt(fromTime[0], 10);
    let toHours = parseInt(toTime[0], 10);
    let fromMinutes = parseInt(fromTime[1], 10);
    let toMinutes = parseInt(toTime[1], 10);
    let fromTimeArea = 'AM';
    let toTimeArea = 'AM';
    if (fromHours >= 12) {
      fromTimeArea = 'PM';
      if (fromHours > 12) fromHours = fromHours - 12;
    } else if (fromHours === 0) fromHours = 12;
    if (toHours >= 12) {
      toTimeArea = 'PM';
      if (toHours > 12) toHours = toHours - 12;
    } else if (toHours === 0) toHours = 12;

    let fromText = `${fromDate} ~ ${fromHours
      .toString()
      .padStart(2, '0')}:${fromMinutes
      .toString()
      .padStart(2, '0')} ${fromTimeArea}`;
    let toText = `${toDate} ~ ${toHours.toString().padStart(2, '0')}:${toMinutes
      .toString()
      .padStart(2, '0')} ${toTimeArea}`;

    return [fromText, toText];
  }

  return (
    <div className="projects">
      <section className="Introduction">
        <div className="container">
          <div className="content">
            <div className="text">
              <h1>Projects</h1>
              <p className="description">
                Within this section, you have the flexibility to incorporate as
                many projects as you desire, and you also have the option to
                delete them at your discretion. Feel free to expand your
                projects as much as you wish, and don't hesitate to remove any
                projects that no longer align with your goals or requirements.
              </p>
            </div>
            <img src={portfolioImage} alt="" />
          </div>
        </div>
      </section>
      <section className="workingArea">
        <header>
          <button
            className="active-button active"
            onClick={(e) => setActive(e)}
          >
            Active
          </button>
          <button className="completed-button" onClick={(e) => setActive(e)}>
            Completed
          </button>
          <button className="uncompleted-button" onClick={(e) => setActive(e)}>
            Uncompleted
          </button>
        </header>
        <div className="divs">
          <div className="active-div active">
            <div className="container">
              <h2>Current Active Projects: </h2>

              <div className="projectsDiv">
                {data &&
                  data.map((project) => {
                    if (project['late'] === 0 && project['completed'] === 0) {
                      const [fromText, toText] = getFinalString(
                        project['from'],
                        project['to']
                      );
                      return (
                        <div
                          className="project"
                          id={`project-${project['id']}`}
                        >
                          <h3 className="name">{project['headline']}</h3>
                          <p className="description">{project['body']}</p>
                          <div className="time">
                            <h5>
                              From: &nbsp;<span>{fromText}</span>
                            </h5>
                            <h5>
                              To: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span>{toText}</span>
                            </h5>
                          </div>
                          <button
                            onClick={(e) => removeProject(e)}
                            className="delete"
                          >
                            X
                          </button>
                        </div>
                      );
                    }
                  })}
              </div>

              <Link to="./projects/new" className="addProject">
                Add Project
              </Link>
            </div>
          </div>
          <div className="completed-div">
            <div className="container">
              <h2>Finished Projects: </h2>
              <div className="projectsDiv">
                {data &&
                  data.map((project) => {
                    if (project['completed'] === 1) {
                      const [fromText, toText] = getFinalString(
                        project['from'],
                        project['to']
                      );
                      return (
                        <div
                          className="project"
                          id={`project-${project['id']}`}
                        >
                          <h3 className="name">{project['headline']}</h3>
                          <p className="description">{project['body']}</p>
                          <div className="time">
                            <h5>
                              From: &nbsp;<span>{fromText}</span>
                            </h5>
                            <h5>
                              To: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span>{toText}</span>
                            </h5>
                          </div>
                          <button
                            onClick={(e) => removeProject(e)}
                            className="delete"
                          >
                            X
                          </button>
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
          </div>
          <div className="uncompleted-div">
            <div className="container">
              <h2>Exceeded deadline Projects: </h2>
              <div className="projectsDiv">
                {data &&
                  data.map((project) => {
                    if (project['late'] === 1 && project['completed'] === 0) {
                      const [fromText, toText] = getFinalString(
                        project['from'],
                        project['to']
                      );
                      return (
                        <div
                          className="project"
                          id={`project-${project['id']}`}
                        >
                          <h3 className="name">{project['headline']}</h3>
                          <p className="description">{project['body']}</p>
                          <div className="time">
                            <h5>
                              From: &nbsp;<span>{fromText}</span>
                            </h5>
                            <h5>
                              To: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span>{toText}</span>
                            </h5>
                          </div>
                          <button
                            onClick={(e) => removeProject(e)}
                            className="delete"
                          >
                            X
                          </button>
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
