const setToken = (token) => {
  localStorage.setItem("ACCESS_TOKEN", token);
};

const getToken = () => {
  return localStorage.getItem("ACCESS_TOKEN");
};

const removeToken = () => {
  localStorage.clear();
};

const getRole = () => {
  if (getToken()) {
    return "ADMIN";
  }
  return "GUEST";
};
const setRole = () => {
  if (getToken()) {
    return "ADMIN";
  }
  return "GUEST";
};

export default {
  setToken,
  getToken,
  removeToken,
  setRole,
  getRole,
};
