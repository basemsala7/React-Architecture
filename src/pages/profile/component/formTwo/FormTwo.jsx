import React from "react";
import eye from "../../../../../public/icons/Eye.svg";
import useDateGetter from "./data";
function FormTwo() {
  const { showPassword, showPasswordConfirm, toggle, formik } = useDateGetter();
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2>Change password</h2>
      <label htmlFor="password">Password</label>
      <div>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <img
          src={eye}
          loading="lazy"
          id="eye"
          name="showPassword"
          onClick={toggle}
        />
      </div>
      {formik.touched.password && formik.errors.password && (
        <div style={{ color: "red" }}>{formik.errors.password}</div>
      )}
      <label htmlFor="passwordConfirm">Confirm Password</label>
      <div>
        <input
          type={showPasswordConfirm ? "text" : "password"}
          name="passwordConfirm"
          id="passwordConfirm"
          value={formik.values.passwordConfirm}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <img src={eye} loading="lazy" id="eye" onClick={toggle} />
      </div>
      {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
        <div style={{ color: "red" }}>{formik.errors.passwordConfirm}</div>
      )}

      <button type="submit">submit Changes password </button>
    </form>
  );
}

export default FormTwo;
