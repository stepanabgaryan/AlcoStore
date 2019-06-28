import React from "react";
// import Button from "@material-ui/core/Button";
import SignUp from "./JS files/SignUp";
import SignIn from "./JS files/SignIn";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./contents/main";
import Basket from "./contents/basket";
import MyProfile from "./JS files/My-profile";
import DeleteAccount from "./JS files/Account_delete_page";
import AboutUs from "./contents/About-Us.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: false,
      signUp: false
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Link to="/"></Link>

          <Route path="/" exact component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/basket" component={Basket} />
          <Route path='/my-profile' component={MyProfile} />
          <Route path='/delete-account' component={DeleteAccount}/>
          <Route path='/about-us' component={AboutUs} />
        </div>
      </Router>
    );
  }
}

export default App;
