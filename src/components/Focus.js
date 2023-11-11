import { useEffect, useState } from 'react';
import '../styles/Focus.css';
import { Link } from 'react-router-dom';
import { updateRequest } from '../api/Requests';

const Focus = () => {
  function handleSelected(e) {
    let list = document.querySelector('.focus ul');
    if (list.style.display === 'none') list.style.display = 'block';
    else list.style.display = 'none';
  }

  function handleSelection(e, id) {
    handleSelected(e);
    let p = document.querySelector('.focus p.selected');
    let span = document.createElement('span');
    span.append(e.target.innerHTML);
    p.innerHTML = '';
    p.appendChild(span);
    p.setAttribute('id', id);

    const svgText =
      '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>';
    const parser = new DOMParser();
    const svgDocument = parser.parseFromString(svgText, 'image/svg+xml');
    const svgElement = svgDocument.documentElement;
    p.appendChild(svgElement);
  }

  function reloadPage() {
    window.location.reload();
  }

  const [time, setTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [firstItem, setFirstItem] = useState("There's no remaining projects");
  const [currentTaskId, setCurrentTaskId] = useState('0');

  useEffect(() => {
    let timeInterval;
    let minutesSpan = document.querySelector('#minutes');
    let secondsSpan = document.querySelector('#seconds');

    if (isRunning && time > 0) {
      timeInterval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        minutesSpan.innerHTML = String(Math.floor(time / 60)).padStart(2, '0');
        secondsSpan.innerHTML = String(time % 60).padStart(2, '0');
      }, 1000);
    } else if (time === 0) {
      secondsSpan.innerHTML = String(0).padStart(2, '0');
      fetch(`http://localhost:8000/projects/${currentTaskId}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          data['completed'] = 1;
          updateRequest(
            `http://localhost:8000/projects/${currentTaskId}`,
            data
          );
          reloadPage();
        });
    }

    return () => {
      clearInterval(timeInterval);
    };
  }, [isRunning, time]);

  useEffect(() => {
    document.querySelector('#taskForm ul').style.display = 'none';
  }, []);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/projects')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  function StartTask(e) {
    let minutes = document.querySelector('form input[type="number"]').value;
    let li = document.querySelector('#taskForm ul li');

    if (!(minutes > 0) || minutes % 1 !== 0) {
      alert('Please enter positive true values only!');
    } else if (!li) {
      alert('Please add more tasks first to start them!');
    } else {
      let selectionDiv = document.querySelector('#selection');
      let taskDiv = document.querySelector('#task');
      let selectedTask = selectionDiv.querySelector('.selected span').innerHTML;
      selectionDiv.style.display = 'none';
      taskDiv.style.display = 'block';
      let h1 = taskDiv.querySelector('h1');
      h1.innerHTML = `Started Task ${selectedTask}. Go do it now!`;

      // setTime(minutes * 60)
      setTime(5);
      setIsRunning(true);
    }
    e.preventDefault();
  }

  return (
    <div className="focus">
      <div className="container">
        <div id="selection">
          <h1>Select one of the un-done tasks to do now!</h1>
          <form action="" id="taskForm">
            <div>
              <p>Choose a task</p>
              <p
                onClick={(e) => handleSelected(e)}
                className="selected"
                id={currentTaskId}
              >
                {data &&
                  data.map((project) => {
                    if (
                      project['completed'] === 0 &&
                      firstItem === "There's no remaining projects"
                    ) {
                      setFirstItem(project['headline']);
                      setCurrentTaskId(project['id']);
                    }
                  })}
                <span>{firstItem}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              </p>
              <ul>
                {data &&
                  data.map((project) => {
                    if (project['completed'] === 0) {
                      return (
                        <li onClick={(e) => handleSelection(e, project['id'])}>
                          {project['headline']}
                        </li>
                      );
                    }
                  })}
              </ul>
            </div>
            <div>
              <p>Select the time to do the selected task in minutes</p>
              <input type="number" />
            </div>
            <input type="submit" value="Start" onClick={(e) => StartTask(e)} />
          </form>
        </div>

        <div id="task">
          <h1>Started Task [Selected]. Go do it now!</h1>
          <h3>
            <span id="minutes">00</span>:<span id="seconds">00</span>
          </h3>
          <Link to="/focus" onClick={reloadPage}>
            Wanna change your choice?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Focus;
