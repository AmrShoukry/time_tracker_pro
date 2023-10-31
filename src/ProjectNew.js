import './ProjectNew.css'

const Newproject = () => {
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
                    <input type="submit" value="Create"/>
                </form>
            </div>
        </div>
     );
}
 
export default Newproject;