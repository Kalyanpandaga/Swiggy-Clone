import React from "react";
import {userContext} from "../utils/userContext"

class UserClass extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            userDetails : {}
        }
    }

    async componentDidMount() {
        const userDetailsPromise = await fetch("https://api.github.com/users/Kalyanpandaga");
        const userDetails = await userDetailsPromise.json()
        console.log(userDetails)
        this.setState({
            userDetails: userDetails
        })
    }

    render() {
        console.log(this.state.userDetails)
        const {login, location, email, avatar_url} = this.state.userDetails
        return (
        <div className="user-card">
            <img alt="avatar" src={avatar_url} />
            <h2> Name: {login}</h2>
            <h4> Location: {location}</h4>
            <h4> Email: {email}</h4>
            <userContext.Consumer>
                {
                    userContext => (<h1> adgf: {userContext.name} </h1>)
                }
            </userContext.Consumer>
        </div>
        )
    }
    
}

export default UserClass;