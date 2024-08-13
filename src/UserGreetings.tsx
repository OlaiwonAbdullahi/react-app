function UserGreetings(props){

    
    if(props.isLoggedIn){
        return <h2 className="welcome">welcome {props.username}</h2>
    }
    else{
        return <h2 className="login">please Log in to continue</h2>
    }
}
export default UserGreetings