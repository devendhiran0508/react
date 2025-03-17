function UserGreeting(props)
{
    return (props.isLoggedin? <h2 className="welcome">Welcome to the page</h2>: <h2 className="login-issue">Please login</h2>);
}
export default UserGreeting