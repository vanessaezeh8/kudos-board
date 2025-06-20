import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import kudoboardlogo from "../assets/kudoboard_logo.png";

function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <header className={`site-header ${darkMode ? "dark" : "light"}`}>
      <img
        src={kudoboardlogo}className="logo"alt="Kudoboard Logo"
      />
      <h1>Kudoboard</h1>
      <button onClick={toggleTheme}>{darkMode ? "🌙Dark" : "☀️Light"}</button>
    </header>
  );
}
export default Header;
