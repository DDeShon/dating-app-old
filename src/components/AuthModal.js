const AuthModal = () => {
  const handleClick = () => {
    setShowModal(false);
  };
  return (
    <div>
      <div onClick={handleClick}>ⓧ</div>
    </div>
  );
};

export default AuthModal;
