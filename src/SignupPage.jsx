import React, { useEffect, useState } from "react";
import "./SignupPage.css";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const SignupPage = () => {
  const [countries, setCountries] = useState([]);
  const [activeTab, setActiveTab] = useState("signup"); // "login" or "signup"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,currencies"
        );
        const data = await response.json();
        const countryList = data.map((country) => ({
          name: country.name.common,
          currency: country.currencies ? Object.keys(country.currencies)[0] : "N/A",
        }));
        countryList.sort((a, b) => a.name.localeCompare(b.name));
        setCountries(countryList);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${activeTab} Form submitted:`, formData);
  };

  return (
    <div className="signup-container">
      <h2>{activeTab === "signup" ? "Admin Signup" : "Admin Login"}</h2>

      {/* Tabs */}
      <div className="signup-tabs">
        <button
          className={`signup-tab ${activeTab === "login" ? "active" : ""}`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          className={`signup-tab ${activeTab === "signup" ? "active" : ""}`}
          onClick={() => setActiveTab("signup")}
        >
          Signup
        </button>
      </div>

      {/* Form container with smooth transition */}
      <div className={`form-wrapper ${activeTab}`}>
        {/* Signup Form */}
        <form
          onSubmit={handleSubmit}
          className={`signup-form signup-form-signup ${
            activeTab === "signup" ? "active" : ""
          }`}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Select Country</option>
            {countries.map((c, index) => (
              <option key={index} value={c.name}>
                {c.name} ({c.currency})
              </option>
            ))}
          </select>
          <button type="submit" className="signup-btn">
            Signup
          </button>
        </form>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className={`signup-form signup-form-login ${
            activeTab === "login" ? "active" : ""
          }`}
        >
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <p className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </p>
          <button type="submit" className="signup-btn">
            Login
          </button>
        </form>
      </div>

      <p className="signup-footer">
        {activeTab === "signup"
          ? "Already have an account? "
          : "Don't have an account? "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab(activeTab === "signup" ? "login" : "signup");
          }}
        >
          {activeTab === "signup" ? "Login" : "Signup"}
        </a>
      </p>
    </div>
  );
};

export default SignupPage;
