//Routing library for react that allows us to render and hide certain components depending on the page URL.
//Route: The Route component is in charge of saying, when the url matches this specified path, render this specified component.

//TYPES OF ROUTES
  //1. Component: Router uses React.CreateElement to create a new element from the given component
  <Router>
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
  </div>
  </Router>

//import {BrowserRouter and Route} from react-router-dom
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//NOTES
  //set 'exact path' explicitly states that you will only see the rendered JSX if you go to /about not /about/something_else.

 const Home = () => <h1>Home</h1>;

 const About = () => <h1>About</h1>;

 const Login = () =>
   <div>
     <h1>Login</h1>
     <form>
       <div>
         <input type="text" name="username" placeholder="Username" />
         <label htmlFor="username">Username</label>
       </div>
       <div>
         <input type="password" name="password" placeholder="Password" />
         <label htmlFor="password">Password</label>
       </div>
       <input type="submit" value="Login" />
     </form>
   </div>;

 const App = () => {
   return (
     <Router>
       <div>
         <Route exact path="/" render={Home} />
         <Route exact path="/about" render={About} />
         <Route exact path="/login" render={Login} />
       </div>
     </Router>
   );
 };

 ReactDOM.render(
   <App />,
   document.getElementById('root')
 );
