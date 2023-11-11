import '../styles/Home.css';
import calendarImage from '../images/calendar.jpg';
import projectsImage from '../images/projects.jpg';
import profileImage from '../images/profile.jpg';
import timesheetImage from '../images/timesheet.png';
import focusImage from '../images/focus.png';
import { Link } from 'react-router-dom';
import Landing from './Landing';

const Home = () => {
  return (
    <div className="Home">
      <Landing />
      <section className="calendar-section" id="calender">
        <div className="container">
          <div className="text">
            <h2>Calender</h2>
            <p className="description">
              Within this dedicated section, you have the convenience of
              perusing your projects as they are meticulously laid out on a
              calendar, allowing you to discern each project's specified date
              and time in an organized and easily comprehensible manner. This
              user-friendly presentation of your project schedule offers you a
              streamlined approach to managing your tasks and deadlines
              effectively.
            </p>
            <Link to="./calender">Explore</Link>
          </div>
          <img src={calendarImage} alt="" />
        </div>
      </section>
      <section className="projects-section">
        <div className="container">
          <div className="text">
            <h2>Projects</h2>
            <p className="description">
              Within this section, you have the flexibility to incorporate as
              many projects as you desire, and you also have the option to
              delete them at your discretion. Feel free to expand your projects
              as much as you wish, and don't hesitate to remove any projects
              that no longer align with your goals or requirements.
            </p>
            <Link to="./projects">Explore</Link>
          </div>
          <img src={projectsImage} alt="" />
        </div>
      </section>
      <section className="profile-section">
        <div className="container">
          <div className="text">
            <h2>Profile</h2>
            <p className="description">
              Within this section, you have the opportunity to access a
              comprehensive repository of information pertaining to your
              profile, encompassing all the details you seek, as well as a
              wealth of statistics that are crucial for your informed
              decision-making and engagement.
            </p>
            <Link to="./profile">Explore</Link>
          </div>
          <img src={profileImage} alt="" />
        </div>
      </section>
      <section className="timesheet-section">
        <div className="container">
          <div className="text">
            <h2>Timesheet</h2>
            <p className="description">
              Within this dedicated section, you are presented with an
              interactive graphical display that vividly showcases the
              distribution of your time over the past several months. This
              engaging and informative visual representation offers a
              comprehensive and enlightening perspective on how you've dedicated
              your time during this specific timeframe, allowing for a deeper
              understanding of your time management and priorities.
            </p>
            <Link to="./timesheet">Explore</Link>
          </div>
          <img src={timesheetImage} alt="" />
        </div>
      </section>
      <section className="focus-section">
        <div className="container">
          <div className="text">
            <h2>Focus Mode</h2>
            <p className="description">
              Within the confines of this particular section, you will
              experience a smooth transition into a dedicated time mode
              specially crafted to facilitate your immersion in a singular
              project of your choice. This unique time mode offers you an
              environment where you can channel your undivided attention and
              energy towards the successful completion of the selected project,
              allowing you to harness your skills and expertise with maximum
              efficiency and productivity.
            </p>
            <Link to="./focus">Explore</Link>
          </div>
          <img src={focusImage} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
