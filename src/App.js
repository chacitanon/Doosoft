import React from "react";
import 'antd/dist/antd.css';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Login from './pages/Login/Login';
import HomePage from './pages/Homepage/Homepage';
import UserRegister from './pages/Register/UserRegister';
import AdminRegister from './pages/Register/AdminRegister';
import Complete from './pages/Complete/Complete';
import DashBoard from './pages/DashBoard/DashBoard';
import { UserContextProvider } from "./context/UserContext";


function App() {
  return (
    <UserContextProvider>
      <Layout>
        <Switch>
          <HomePage exact path="/" />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={UserRegister} />
          <Route exact path="/admin/register" component={AdminRegister} />
          <Route exact path="/admin/dashboard" component={DashBoard} />
          <Route exact path="/complete" component={Complete} />
        </Switch>
      </Layout>
    </UserContextProvider>
  );
}

export default App;
