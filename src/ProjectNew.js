import './ProjectNew.css'
import { useHistory } from 'react-router-dom';
import { sendRequest } from './Requests';
import hasExccededDeadline from './UtilityFunctions';

const Newproject = () => {
    const history = useHistory(); 

    function sendData(e)
    {
        e.preventDefault()
        let form = e.target.parentNode
        let from = form.querySelector('#from').value;
        let to = form.querySelector('#to').value;

        if (!(checkValidTimes(from, to)))
        {
            alert("You have to select a valid range of time to do your project!!")
            return
        }

        let user_id = 1
        let headline = form.querySelector('input[type="text"]').value;
        let body = form.querySelector('textarea').value;
        let completed = 0;
        let late = hasExccededDeadline(to) ? 1 : 0;
        
        let data = {"user_id": user_id, "headline": headline, "body": body, "from": from, "to": to, "completed": completed, "late": late}

        sendRequest(data, 'http://localhost:8000/projects', '/projects', history)

    }

    function checkValidTimes(from, to)
    {
        const fromTime = new Date(from)
        const toTime = new Date(to)
        return toTime > fromTime
    }



    return ( 
        <div className="newProject">
            <div className="container">
                <h1>Add a new Project</h1>
                <form action="" id="new">
                    <div className="inputs">
                        <input type="text" placeholder='Headline...' id="head" required/>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Body ...'></textarea>
                        <div className="dates">
                            <input type="datetime-local" placeholder='From ...' id="from" required/>
                            <input type="datetime-local" placeholder='To ...' id="to" required/>
                        </div>
                    </div>
                    <input type="submit" value="Create" onClick={(e) => sendData(e)}/>
                </form>
            </div>
        </div>
     );
}
 
export default Newproject;