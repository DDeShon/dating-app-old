import { useState } from "react";
import Nav from "../components/Nav";

const OnBoarding = () => {
  const handleSubmit = () => {
    console.log("submitted");
  };

  const handleChange = () => {
    console.log("changed");
  };

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
                id="male-gender-identity"
                type="radio"
                name="gender_identity"
                value="male"
                onChange={handleChange}
                checked={true}
              />
              <label htmlFor="male-gender">Male</label>
              <input
                id="female-gender-identity"
                type="radio"
                name="gender_identity"
                value="female"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="female-gender">Female</label>
            </div>
            <label htmlFor="show-gender">Show Gender on my profile</label>
            <input
              id="show-gender"
              type="checkbox"
              name="show_gender"
              onChange={handleChange}
              checked={true}
            />

            <label>Show Me</label>
            <div className="multi-input-container">
              <input
                id="male-gender-interest"
                type="radio"
                name="gender_interest"
                value="male"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="male-gender-interest">Male</label>
              <input
                id="female-gender-interest"
                type="radio"
                name="gender_interest"
                value="female"
                onChange={handleChange}
                checked={true}
              />
              <label htmlFor="female-gender-interest">Female</label>
              <input
                id="everyone-gender-interest"
                type="radio"
                name="gender_interest"
                value="everyone"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default OnBoarding;
