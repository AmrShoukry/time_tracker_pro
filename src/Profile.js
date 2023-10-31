import './Profile.css'

const Profile = () => {
    return ( 
        <div className='Profile'>
            <div className="container">
                <h1>Hello, [Amr]</h1>
                <p className="description">Within this Page, you have the opportunity to access a comprehensive repository of information pertaining to your profile, encompassing all the details you seek, as well as a wealth of statistics that are crucial for your informed decision-making and engagement.</p>
                <hr />
                <div className="information">
                    <h4>Name: <span>Amr</span> <span>Shoukry</span></h4>
                    <h4>Email: <span>amr@gmail.com</span></h4>
                    <h4>Number of Active Projects <span>4</span> </h4>
                    <h4>Number of Completed Projects <span>2</span> </h4>
                    <h4>Number of Uncompleted Projects <span>1</span> </h4>
                    <h4>Registered at: <span>2023-11-05</span> </h4>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;