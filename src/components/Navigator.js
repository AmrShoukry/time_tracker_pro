import '../styles/Navigator.css';

import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navigator = () => {
  const [toggle, setToggle] = useState('close');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let customNavWidth = '250px';
    if (toggle === 'close') {
      customNavWidth = '50px';
      document.documentElement.style.setProperty('--nav-width', customNavWidth);
      document.body.style.paddingLeft = '50px';
    } else {
      if (windowWidth > 992) {
        customNavWidth = '250px';
        document.documentElement.style.setProperty(
          '--nav-width',
          customNavWidth
        );
        document.body.style.paddingLeft = '250px';
      } else if (windowWidth > 768) {
        customNavWidth = '210px';
        document.documentElement.style.setProperty(
          '--nav-width',
          customNavWidth
        );
        document.body.style.paddingLeft = '210px';
      } else {
        document.body.style.paddingLeft = '50px';
      }
    }
  }, [windowWidth]);

  const toggleNavigator = () => {
    let customNavWidth = '250px';
    if (toggle === 'open') {
      setToggle('close');
      customNavWidth = '50px';
      document.documentElement.style.setProperty('--nav-width', customNavWidth);
      document.body.style.paddingLeft = '50px';
    } else {
      setToggle('open');
      if (window.innerWidth > 768) {
        customNavWidth = '250px';
        document.documentElement.style.setProperty(
          '--nav-width',
          customNavWidth
        );
        document.body.style.paddingLeft = '250px';
      }
    }
  };

  useEffect(() => {
    let customNavWidth = '250px';
    if (window.innerWidth > 768) {
      setToggle('open');
      if (window.innerWidth > 992) {
        customNavWidth = '250px';
        document.documentElement.style.setProperty(
          '--nav-width',
          customNavWidth
        );
        document.body.style.paddingLeft = '250px';
      } else {
        customNavWidth = '210px';
        document.documentElement.style.setProperty(
          '--nav-width',
          customNavWidth
        );
        document.body.style.paddingLeft = '210px';
      }
    } else {
      customNavWidth = '50px';
      document.documentElement.style.setProperty('--nav-width', customNavWidth);
      document.body.style.paddingLeft = '50px';
    }
  }, []);

  return (
    <nav className={toggle}>
      <div className="logo">
        <NavLink exact to="/" className="imglogo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM96 75V64H288V75c0 19-5.6 37.4-16 53H112c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9L192 301.3l67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9H112z" />
          </svg>
        </NavLink>
        <NavLink exact to="/" className="textlogo">
          Time Tracker Pro
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
            <span>Home Page</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/calender" activeClassName="active-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
            </svg>
            <span>Calender</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/projects" activeClassName="active-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z" />
            </svg>
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/profile" activeClassName="active-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            <span>Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/timesheet" activeClassName="active-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M0 448c0 35.3 28.7 64 64 64H224V384c0-17.7 14.3-32 32-32H384V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V448zM171.3 75.3l-96 96c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l96-96c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm96 32l-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zM384 384H256V512L384 384z" />
            </svg>
            <span>Timesheet</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/focus" activeClassName="active-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 640 512"
            >
              <path d="M15 15C24.4 5.7 39.6 5.7 49 15l63 63V40c0-13.3 10.7-24 24-24s24 10.7 24 24v96c0 13.3-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24H78.1L15 49C5.7 39.6 5.7 24.4 15 15zM133.5 243.9C158.6 193.6 222.7 112 320 112s161.4 81.6 186.5 131.9c3.8 7.6 3.8 16.5 0 24.2C481.4 318.4 417.3 400 320 400s-161.4-81.6-186.5-131.9c-3.8-7.6-3.8-16.5 0-24.2zM320 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM591 15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-63 63H600c13.3 0 24 10.7 24 24s-10.7 24-24 24H504c-13.3 0-24-10.7-24-24V40c0-13.3 10.7-24 24-24s24 10.7 24 24V78.1l63-63zM15 497c-9.4-9.4-9.4-24.6 0-33.9l63-63H40c-13.3 0-24-10.7-24-24s10.7-24 24-24h96c13.3 0 24 10.7 24 24v96c0 13.3-10.7 24-24 24s-24-10.7-24-24V433.9L49 497c-9.4 9.4-24.6 9.4-33.9 0zm576 0l-63-63V472c0 13.3-10.7 24-24 24s-24-10.7-24-24V376c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H561.9l63 63c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0z" />
            </svg>
            <span>Focus Mode</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/login" activeClassName="active-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
            </svg>
            <span>Login</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/signup" activeClassName="active-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 640 512"
            >
              <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
            </svg>
            <span>Sign Up</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/logout" activeClassName="active-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
            </svg>
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
      <button className="toggleDiv" onClick={toggleNavigator}>
        <svg
          className="toggle"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
        </svg>
      </button>
    </nav>
  );
};

export default Navigator;
