import React from "react";
import "./App.css";
import Home from "./component/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./component/global/nav";
import About from "./component/aboutUs";
import Service from "./component/services";
import Contact from "./component/contact";
import Login from "./component/login";
import Signup from "./component/signup";
import Project from "./component/project";
import Footer from "./component/global/footer";
import News from "./component/News";
import Admin from "./component/admin";
import Sidebar from "./component/sidebar";
import Gym from "./component/gym";
import Card from "./component/card";
import Form from "./component/form";
import Tender from "./component/Tender";
import TenderForm from "./component/tenderForm";
import TenderNews from "./component/tenderNews";
import Calendar1 from "./component/calendar";
import AllProject from "./component/AllProject";
import UserData from "./more/UserData";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Store from "./store";
import { loadUser } from "./actions/userAction";
import AllUsers from "./component/admin/AllUsers";
import CreateProduct from "./component/admin/CreateProduct";
import Equipment from "./component/equipment/Equippment";
import ProtectedRoute from "./route/ProtectedRoute";
import Profile from "./component/user/Profile";
import EditProfile from "./component/user/EditProfile";
import UpdatePassword from "./component/user/UpdatePassword";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      {isAuthenticated && <UserData user={user} />}
      <Nav />

      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/allusers" component={AllUsers} />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/product"
          component={CreateProduct}
        />
        <Route exact path="/sidebar" component={Sidebar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/equipment" component={Equipment} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/Allproject" component={AllProject} />
        <Route exact path="/news" component={News} />
        <Route exact path="/gym" component={Gym} />
        <Route exact path="/card" component={Card} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/tender" component={Tender} />
        <Route exact path="/calendar" component={Calendar1} />
        <Route exact path="/tenderNews" component={TenderNews} />
        <Route exact path="/tenderForm" component={TenderForm} />
        <Route exact path="/product" component={CreateProduct} />
        <Route exact path="/me" component={Profile} />
        <Route exact path="/info" component={EditProfile} />
        <Route exact path="/updatepwd" component={UpdatePassword} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
