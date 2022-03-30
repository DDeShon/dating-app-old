import whiteLogo from "../images/Code_Monkey_BW.png"; //placeholder images
import colorLogo from "../images/Code_Monkey.png";

const Nav = ({ minimal, authToken }) => {
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : whiteLogo} />
      </div>

      {!authToken && !minimal && <button className="nav-button">Log In</button>}
    </nav>
  );
};

export default Nav;
