import Complete from "../pages/Complete/Complete";
import DashBoard from "../pages/DashBoard/DashBoard";
import AdminRegister from "../pages/Register/AdminRegister";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import UserRegister from "../pages/Register/UserRegister";

const components = {
  register: {
    path: "/register",
    page: UserRegister
  },
  homePage: {
    path: "/",
    page: Homepage
  },
  adminPage: {
    path: "/admin/dashboard",
    page: DashBoard
  },
  adminRegister: {
    path: "/admin/register",
    page: AdminRegister
  },
  login: {
    path: "/login",
    page: Login
  },
  complete: {
    path: "/complete",
    page: Complete
  }
};

const roles = {
  ADMIN: [
    components.adminPage
  ],
  GUEST: [
    components.register,
    components.login,
    components.homePage,
    components.complete,
    components.adminRegister
  ]
};

export default roles;