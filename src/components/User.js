const User = (props) => {
    const {userDetails} = props;
    const {name, location, email} = userDetails;

    return (
        <div className="user-card">
            <h2> Name: {name}</h2>
            <h4> Location: {location}</h4>
            <h4> Email: {email}</h4>
        </div>
    );
};

export default User;
