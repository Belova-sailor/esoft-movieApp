import NavBar from "../nav/nav";
import "./header.css";
import Button from "../button/button";

const Header = () => {
  return (
    <div className="header-wrap">
      <div className="left-bar-wrap">
        <img
          src="./assets/images/logo.png"
          className="App-logo"
          alt="logo"
        />
        <span className="header-logo">Полежи</span>
		<span className="header-tagline">и посмотри кино</span>
      </div>
	  <div className="right-bar-wrapper">
	  <Button />
	  </div>
    </div>
  );
};

export default Header;
