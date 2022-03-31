import { useState } from "react";

const AuthModal = ({ setShowModal }) => {
  const [email, setEmail] = useState(null);

  const handleClick = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const isSignedUp = true;

  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        ⓧ
      </div>
      <h2>{isSignedUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      <p>
        By clicking LOG IN, you agree to our terms. Learn how we process your
        data in our Privacy Policy and Cookie Policy
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      AUTH MODAL
    </div>
  );
};

export default AuthModal;
