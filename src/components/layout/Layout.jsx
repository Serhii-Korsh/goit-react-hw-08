import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import PropTypes from "prop-types";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <AppBar />
      {children}
      <Outlet />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
//proba
