import User from "./User";
import UserClass from "./UserClass"

const About = () => {
    const UserDetails = {name: "kalyan", location: "khammam", email: "kalyanlee@gmail.com"}
    return (
        <div>
            <h1 className="about-heading"> About Us </h1>
            <h2  className="about-description"> Hello all, Nameste React Developers details are below: </h2>
            <UserClass userDetails={UserDetails}/>
        </div>
    );
};

export default About;