import '../styles/Profile.css';
import { getRequest } from '../api/Requests';
import { useEffect, useState } from 'react';
import hasExccededDeadline from '../utilities/UtilityFunctions';

const Profile = () => {
  const [data, setData] = useState(null);
  const [active, setActive] = useState(0);
  const [completetd, setCompleted] = useState(0);
  const [uncompleted, setUncompletetd] = useState(0);

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
        console.log(data);

        let activeCount = 0;
        let completedCount = 0;
        let uncompletedCount = 0;

        data.forEach((project) => {
          console.log(project);
          if (project['completed'] === 1) {
            completedCount += 1;
          } else {
            console.log('NOT');
            if (project['late'] === 0) activeCount += 1;
            else uncompletedCount += 1;
          }
        });
        setActive(activeCount);
        setCompleted(completedCount);
        setUncompletetd(uncompletedCount);
      });
  }, []);

  return (
    <div className="Profile">
      <div className="container">
        <h1>Hello, [Amr]</h1>
        <p className="description">
          Within this Page, you have the opportunity to access a comprehensive
          repository of information pertaining to your profile, encompassing all
          the details you seek, as well as a wealth of statistics that are
          crucial for your informed decision-making and engagement.
        </p>
        <hr />
        <div className="information">
          <h4>
            Name: <span>Amr</span> <span>Shoukry</span>
          </h4>
          <h4>
            Email: <span>amr@gmail.com</span>
          </h4>
          <h4>
            Number of Active Projects: <span>{active}</span>{' '}
          </h4>
          <h4>
            Number of Completed Projects: <span>{completetd}</span>{' '}
          </h4>
          <h4>
            Number of Uncompleted Projects: <span>{uncompleted}</span>{' '}
          </h4>
          <h4>
            Registered at: <span>2023-11-05</span>{' '}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Profile;
