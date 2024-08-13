import profilePic from './assets/Abdullahi0xhng.png'
import'./Card.css'
function Card(props){


    return(
        <div className="card">
            <img src={profilePic} alt="Profile Picture" className='card-image'></img>
            <h2 className='card-title'>{props.name}</h2>
            <p className='card-text'>i'm a Software Dev</p>
        </div>
    )
}
export default Card