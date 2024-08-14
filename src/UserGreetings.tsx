import PropTypes  from 'react'
import './UserGreetings.css'
function UserGreetings(props){

    const welcome = <h2 className="welcome">welcome {props.username}</h2>

    const Login = <h2 className="login">please Log in to continue</h2>
    
    return (props.isLoggedIn ? welcome : Login)
}
UserGreetings.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.strings,
}
export default UserGreetings