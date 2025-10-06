// utils/auth.js

export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  const userData = localStorage.getItem("user");
  return userData ? JSON.parse(userData) : null;
};

export const isAdmin = () => {
  const user = getUser();
  return user?.role === "admin";
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};

export const isAuthenticated = () => {
  const user = getUser();
  return user !== null;
};