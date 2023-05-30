import React from "react";
import { useFormik } from "formik";

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = "Field required";
      if (!values.password) errors.password = "Field required";
      return errors;
    },
  });

  const { handleSubmit, handleChange, values, errors } = formik;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Email:</div>
        <input
          id="emailField"
          type="text"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        {errors.email && (
          <div id="emailError" style={{ color: "red" }}>
            {errors.email}
          </div>
        )}
        <div>Password:</div>
        <input
          id="pswField"
          type="text"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
        <br />
        {errors.password && (
          <div id="pswError" style={{ color: "red" }}>
            {errors.password}
          </div>
        )}
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
