import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Welcome to Contact Book</h1>
      <p className={styles.description}>
        Easily manage your contacts, keep track of their information, and stay
        connected.
      </p>
      <div className={styles.links}>
        <Link to="/register" className={styles.link}>
          Get Started
        </Link>
        <Link to="/login" className={styles.link}>
          Log In
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
