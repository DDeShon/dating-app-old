const Home = () => {
  const authToken = true;

  return (
    <div className="home">
      <h1>Swipe Right®</h1>
      <button className="primary-button">
        {authToken ? "Signout" : "Create Account"}
      </button>
    </div>
  );
};

export default Home;
