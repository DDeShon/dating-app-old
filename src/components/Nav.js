import whiteLogo from "../images/Code_Monkey_BW.png"; //placeholder images
import colorLogo from "../images/Code_Monkey.png";

const Nav = ({ minimal, authToken, setShowModal }) => {
  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : whiteLogo} />
      </div>

      {!authToken && !minimal && (
        <button className="nav-button" onClick={handleClick}>
          Log In
        </button>
      )}
    </nav>
  );
};

export default Nav;
