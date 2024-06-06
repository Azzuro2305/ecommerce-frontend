import React, { useState } from "react";
import DatePicker from "react-datepicker";
import zxcvbn from "zxcvbn";
import Images from "../Components/Images/Images";
import "react-datepicker/dist/react-datepicker.css";


export const Registration = () => {
  const [focusedField, setFocusedField] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [inputData, setInputData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    email: "",
    password: "",
    terms: false,
  });

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField("");
  };

  const CustomInput = React.forwardRef((props, ref) => (
    <input
      type="text"
      ref={ref}
      onClick={props.onClick}
      value={props.value}
      onChange={props.onChange}
      placeholder="MM/DD/YYYY"
      required
    />
  ));

  return (
    <section className="container">
      <div className="container__registration">
        <div className="container__registration__title">
          <h1>CHANEL</h1>
          <h2>CREATE AN ACCOUNT</h2>
          <p>Complete all fields to create you account</p>
        </div>

        <form>
          <label
            htmlFor="firstname"
            className={`label ${
              focusedField === "firstname" || inputData.firstname
                ? "focused"
                : ""
            }`}
          >
            First name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            onFocus={() => handleFocus("firstname")}
            onBlur={handleBlur}
            onChange={(e) =>
              setInputData({ ...inputData, firstname: e.target.value })
            }
            required
          />

          <label
            htmlFor="lastname"
            className={`label ${
              focusedField === "lastname" || inputData.lastname ? "focused" : ""
            }`}
          >
            Last name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            onFocus={() => handleFocus("lastname")}
            onBlur={handleBlur}
            onChange={(e) =>
              setInputData({ ...inputData, lastname: e.target.value })
            }
            required
          />

          <label htmlFor="dob" className="dob">
            Date of Birth
          </label>
          <DatePicker
            id="dob"
            selected={inputData.dob}
            onChange={(date) => {
              setInputData({
                ...inputData,
                dob: date,
              });
            }}
            onBlur={handleBlur}
            dateFormat="MM/dd/yyyy"
            customInput={<CustomInput />}
            popperPlacement="bottom-start"
          />
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

                let passwordStrength = 0;

                if (password.length >= 8) {
                  passwordStrength++;
                }

                if (/[A-Z]/.test(password)) {
                  passwordStrength++;
                }

                if (/\d/.test(password)) {
                  passwordStrength += 2;
                }

                if (/[^A-Za-z0-9]/.test(password)) {
                  passwordStrength++;
                }

                setPasswordStrength(passwordStrength);
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

          <div style={{ height: "14px" }}>
            {isPasswordFocused && (
              <>
                <div
                  style={{
                    color:
                      !inputData.password || inputData.password === ""
                        ? "#6a6b6c"
                        : passwordStrength < 2
                        ? "red"
                        : passwordStrength < 4
                        ? "#FFA500"
                        : "green",
                    padding: "0px 5px 10px 5px",
                  }}
                >
                  {
                    [
                      "Minimum 8 Characters",
                      "Weak",
                      "Okay",
                      "Strong",
                      "Very strong",
                      "Excellent",
                    ][passwordStrength]
                  }
                </div>
                <div
                  style={{
                    height: "4px",
                    width: "100%",
                    backgroundColor: "#CFCFCF",
                  }}
                >
                  <div
                    style={{
                      height: "4px",
                      width: inputData.password
                        ? `${passwordStrength * 20}%`
                        : "0%",
                      backgroundColor:
                        passwordStrength < 2
                          ? "red"
                          : passwordStrength < 4
                          ? "#FFA500"
                          : "green",
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </div>
              </>
            )}
          </div>

          <div className="agreement">
          <label htmlFor="terms" >
            <input
              type="checkbox"
              id="terms"
              name="terms"
              onBlur={handleBlur}
              required
            />
            I agree to the Terms of Service.
          </label>
          <a href="">
            Have an Account? Login
          </a>
          </div>


          <input type="submit" value="Register" />
        </form>
      </div>
    </section>
  );
};
