import styles from "./header.module.css";
import logo from "../../../public/icons/logo-white.png";
import menu from "../../../public/icons/menu.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { logout } from "../../assets/js/utlis";
function Header() {
  const { isLogin, setUser, user } = useContext(AppContext);
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={logo} loading="lazy" alt="logo" width={100} height={60} />
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link>All Tours</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.registrationWrapper}>
        {isLogin ? (
          <>
            <button onClick={() => logout(setUser)}> logout</button>
            <span>{user?.name?.charAt(0)?.toUpperCase()}</span>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <button> sign in</button>
            </Link>
            <Link to={"/registration"}>
              <button>sign up </button>
            </Link>
          </>
        )}
      </div>

      <div className={styles.menue}>
        <img src={menu} loading="lazy" alt="menu" />
      </div>
    </header>
  );
}

export default Header;
