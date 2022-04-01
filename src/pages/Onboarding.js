import { useState } from "react";
import Nav from "../components/Nav";

const OnBoarding = () => {
  return (
    <>
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={""}
              onChange={handleChange}
            />
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              type="text"
              name="last_name"
              placeholder="last Name"
              required={true}
              value={""}
              onChange={handleChange}
            />
            <label htmlFor="first_name">First Name</label>
            <label htmlFor="first_name">First Name</label>
          </section>
        </form>
      </div>
    </>
  );
};

export default OnBoarding;
