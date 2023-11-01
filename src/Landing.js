import './Landing.css'
import {Link} from 'react-router-dom';


const Landing = () => {
    return ( 
        <div className="landing">
            <div className="container">
                <h1>Welcome To Time Tracker Pro! your way to become more productive!</h1>
                <p className="description">
                    In Time Tracker Pro, our overarching mission is to elevate your levels of productivity and efficiency by offering a robust array of tools and features meticulously crafted to cater to your needs. Our commitment lies in equipping you with the means to optimize your time management and enhance your performance. Through a combination of innovative features and user-friendly tools, we aim to empower you, enabling you to achieve your goals more effectively and with greater ease, all while making the most of your valuable time.
                </p>
                <div className="buttons">
                    <Link to="/login">Have an account?</Link>
                    <Link to="/signup">New to the website?</Link>
                    <a href="#calender">Explore</a>

                </div>
            </div>
        </div>
     );
}
 
export default Landing;