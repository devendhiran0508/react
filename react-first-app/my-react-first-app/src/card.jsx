import profilePic from './assets/profile.jpg'

function card()
{
    return(
        <div className="card">
            <img className="card-pic" src={profilePic} alt="profile picture"/>
            <h2 className="card-title">DEVENDHIRAN</h2>
            <p className='card-text'>Hi, welcome to my page!</p>
        </div>
    );
}
export default card