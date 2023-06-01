import React from "react";
import Home from "./component/homePage/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./component/global/nav";
import About from "./component/aboutUs/aboutUs";
import Service from "./component/servicePage/services";
import Contact from "./component/contactUs/contact";
import Login from "./component/login/Login";
import Signup from "./component/login/signup";
import Project from "./component/ProjectCard/project";
import Footer from "./component/global/footer";
import News from "./component/news/News";
import NoteForm from "./component/NoteComponent/CreateNote";
import Admin from "./component/admin/admin";
import Sidebar from "./component/admin/sidebar";
import Tender from "./component/tender/Tender";
import TenderForm from "./component/tender/tenderForm";
import TenderNews from "./component/tender/tenderNews";
import Calendar1 from "./component/calendar/calendar";
import AllProject from "./component/ProjectCard/AllProject";
import ProjectForm from "./component/ProjectCard/projectForm";
import Notes from "./component/NoteComponent/NotesList";
import UpdateUser from "./component/admin/Updateuser";
import HiringForm from "./component/hire/hiring";
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
import Allhire from "./component/hire/Allhire";
import Success from "./component/hire/Hiresuccess";
import NoteList from "./component/NoteComponent/NotesList";
import ForgotPassword from "./component/user/forgotPassword";
import ResetPassword from "./component/user/ResetPassword";
import Cart from "./component/cart/Cart";
import ProductDetails from "./component/equipment/ProductDetails";
import Shipping from "./component/cart/Shipping";
import ConfirmOrder from "./component/cart/ConfirmOrder";
import Payment from "./component/cart/Payment";
import Success1 from "./component/cart/Success";
import MyOrder from "./component/user/MyOrder";

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
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/shipping" component={Shipping} />
        <Route exact path="/order/confirm" component={ConfirmOrder} />
        <Route exact path="/process/payment" component={Payment} />
        <Route exact path="/orders" component={MyOrder} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/equipment" component={Equipment} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/Allproject" component={AllProject} />
        <Route exact path="/projectForm" component={ProjectForm} />
        <Route exact path="/news" component={News} />
        <Route exact path="/tender" component={Tender} />
        <Route exact path="/calendar" component={Calendar1} />
        <Route exact path="/tenderNews" component={TenderNews} />
        <Route exact path="/tenderForm" component={TenderForm} />
        <Route exact path="/product" component={CreateProduct} />
        <Route exact path="/me" component={Profile} />
        <Route exact path="/info" component={EditProfile} />
        <Route exact path="/updatepwd" component={UpdatePassword} />
        <Route exact path="/noteslist" component={NoteList} />
        <Route exact path="/header" component={Headers} />
        <Route exact path="/hiringForm" component={HiringForm} />
        <Route exact path="/allhire" component={Allhire} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/success1" component={Success1} />
        <Route exact path="/notes" component={NoteForm} />
        <Route exact path="/password/forgot" component={ForgotPassword} />
        <Route exact path="/password/reset/:token" component={ResetPassword} />
        <Route exact path="/admin/user/:id" component={UpdateUser} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
