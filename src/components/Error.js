import {useRouteError} from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1> Oops !!!</h1>
            <h2> Something Went Wrong </h2>
            <h5>{error.status + " : " + error.statusText}</h5>
        </div>
    );
};

export default Error;