// import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />;
};

export default RestrictedRoute;

// import PropTypes from "prop-types";
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../redux/auth/selectors";

// const RestrictedRoute = ({ component, redirectTo = "/" }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const ComponentToRender =
//     typeof component === "function" ? component : () => component;

//   return isLoggedIn ? <Navigate to={redirectTo} /> : <ComponentToRender />;
// };

// RestrictedRoute.propTypes = {
//   component: PropTypes.oneOfType([
//     PropTypes.element, // React-элемент
//     PropTypes.func, // Функциональный компонент
//   ]).isRequired,
//   redirectTo: PropTypes.string,
// };

// export default RestrictedRoute;

// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../redux/auth/selectors";
// import PropTypes from "prop-types";

// const RestrictedRoute = ({ component = null, redirectTo = "/" }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return isLoggedIn ? <Navigate to={redirectTo} /> : component;
// };

// RestrictedRoute.propTypes = {
//   component: PropTypes.element.isRequired, // Ensures 'component' is a React element
//   redirectTo: PropTypes.string, // Ensures 'redirectTo' is a string
// };

// RestrictedRoute.defaultProps = {
//   redirectTo: "/", // Default value for redirectTo
// };

// export default RestrictedRoute;

// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../redux/auth/selectors";

// const RestrictedRoute = ({ component, redirectTo = "/" }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return isLoggedIn ? <Navigate to={redirectTo} /> : component;
// };

// export default RestrictedRoute;
