import React, { useState } from "react";
import DatePicker from "react-datepicker";
import zxcvbn from "zxcvbn";
import Images from "../Components/Images/Images";
import "react-datepicker/dist/react-datepicker.css";

export const Login = () => {
  const [focusedField, setFocusedField] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [inputData, setInputData] = useState({
    email: "",
    password: ""
  });

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField("");
  };

  return (
    <section className="container">
      <div className="container__registration">
        <div className="container__registration__title">
          <h1>CHANEL</h1>
          <h2>LOGIN</h2>
        </div>

        <form>
          <label
            htmlFor="email"
            className={`label ${
              focusedField === "email" || inputData.email ? "focused" : ""
            }`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
            required
          />
          <label
            htmlFor="password"
            className={`label ${
              focusedField === "password" || inputData.password ? "focused" : ""
            }`}
          >
            Password
          </label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              onFocus={() => {
                handleFocus("password");
                setIsPasswordFocused(true);
              }}
              onBlur={(e) => {
                handleBlur(e);
                setIsPasswordFocused(false);
              }}
              onChange={(e) => {
                const password = e.target.value;
                setInputData({ ...inputData, password });
              }}
              required
            />
            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img
                src={showPassword ? Images.show : Images.hide}
                alt="Toggle visibility"
              />
            </button>
          </div>


          <div className="agreement">
          <a href="">
            Forgot Password?
          </a>
          </div>


          <input type="submit" value="Login" />
        </form>
      </div>
    </section>
  );
};
