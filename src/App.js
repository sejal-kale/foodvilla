// JavaScript

/*const heading=document.createElement('h1');
        const root=document.getElementById('root');
        heading.innerHTML="Helloooo, students";
        root.appendChild(heading);
        */

// React Js


// const heading1=React.createElement('h1',null,"Namaste React Js H1");

// const heading2=React.createElement('h2',null,"Namaste React Js H2");

// const container=React.createElement('div',null,[heading1,heading2]);




import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { lazy } from "react";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Body from "./components/Body.js"
import { IMG_CDN_URL } from "./constant.js";
import { restrauntList } from "./constant";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import RestarauntMenu from "./components/RestarauntMenu.js";
import Login from "./components/Login.js";
import { UserContext } from "./utils/UserContext.js";
// import InstaMart from "./components/InstaMart.js";
import { Provider } from "react-redux";
import store from "./utils/store.js"
import Cart from "./components/Cart.js";

const InstaMart=lazy(()=>import("./components/InstaMart.js"));

// const [user,setUser]=useState({
 
//   name:"Sejal Kale",
//   email:"sejalkale1910@gmail.com",
//   })


const AppLayout=()=>{
        return(
        <Provider store={store}>
        <UserContext.Provider>
        <Header/>
        <Outlet/>
        <Footer/>
        </UserContext.Provider>   
        </Provider> 
      
)};


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:id",
        element:<RestarauntMenu/>
      },
      {
        path:"/instamart",
        element:(<Suspense><InstaMart/></Suspense>)
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },

    ]
  },
  
])





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
