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
            <label>Birthday</label>
            <div className="multi-input-container">
              <input
                id="dob_day"
                type="number"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={""}
                onChange={handleChange}
              />
              <input
                id="dob_month"
                type="number"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={""}
                onChange={handleChange}
              />
              <input
                id="dob_year"
                type="number"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={""}
                onChange={handleChange}
              />
            </div>
            <label htmlFor="gender">Gender</label>
            <div className="multi-input-container">
              <input
                id="male-gender"
                type="radio"
                name="gender_identity"
                value="male"
                onChange={handleChange}
                checked={true}
              />
              <label htmlFor="male-gender">Male</label>
              <input
                id="female-gender"
                type="radio"
                name="gender_identity"
                value="female"
                onChange={handleChange}
                checked={true}
              />
              <label htmlFor="female-gender">Female</label>
            </div>
            <label htmlFor="show-gender">Show Gender on my profile</label>
            <input
              id="show-gender"
              type="checkbox"
              name="gender_identity"
              value="female"
              onChange={handleChange}
              checked={true}
            />
          </section>
        </form>
      </div>
    </>
  );
};

export default OnBoarding;
