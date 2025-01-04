import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

// import React from 'react';
// import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../redux/auth/selectors";

// const PrivateRoute = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;

// import PropTypes from "prop-types";
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../redux/auth/selectors";

// const PrivateRoute = ({ component, redirectTo = "/" }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const ComponentToRender =
//     typeof component === "function" ? component : () => component;

//   return isLoggedIn ? <ComponentToRender /> : <Navigate to={redirectTo} />;
// };

// PrivateRoute.propTypes = {
//   component: PropTypes.oneOfType([
//     PropTypes.element, // React-элемент
//     PropTypes.func, // Функциональный компонент
//   ]).isRequired,
//   redirectTo: PropTypes.string,
// };

// export default PrivateRoute;

// import PropTypes from "prop-types";
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../redux/auth/selectors";

// const PrivateRoute = ({ component, redirectTo = "/" }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return isLoggedIn ? component : <Navigate to={redirectTo} />;
// };

// // Adding prop-types validation
// PrivateRoute.propTypes = {
//   component: PropTypes.element.isRequired, // React element is expected
//   redirectTo: PropTypes.string, // Optional string
// };
// export default PrivateRoute;
