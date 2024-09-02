import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import ResturentMenu from "./components/ResturentMenu"
import Cart from "./components/Cart";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { userContext } from "./utils/userContext";
import { useState } from "react"
import appStore from "./utils/redux/appStore";
import { Provider } from "react-redux";


const AppLayout = () => {
    const [userName, setUserName] = useState("Kalyan")

    return (
        <Provider store={appStore}>
        <userContext.Provider value={{name: userName, setUserName}}> 
            <div className="container">
                <Header/>
                <Outlet/>
            </div>
        </userContext.Provider> 
        </Provider>
    )
}

const appRouter =  createBrowserRouter([
    {
        "path": "/",
        "element": <AppLayout/>,
        "children": [
            {
                "path": "/",
                "element": <Body/>
            },
            {
                "path": "/about",
                "element": <About/>
            },
            {
                "path": "/contact",
                "element": <Contact/>
            },
            {
                "path": "/resturent/:resId",
                "element": <ResturentMenu/>
            },
            {
                "path": "/cart",
                "element": <Cart/>
            },
        ],
        "errorElement": <Error/>
    },
    
])

const container = ReactDOM.createRoot(document.getElementById("root"))

container.render(<RouterProvider router={appRouter}/>);
