import React from "react";
import { useDataGetter } from "./data";
import eye from "../../../public/icons/Eye.svg";
import { Link } from "react-router-dom";

function Registration() {
  const { isShow1, showToggle1, isShow2, showToggle2, formik } =
    useDataGetter();
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name :</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? (
        <span>{formik.errors.name}</span>
      ) : null}

      <label htmlFor="email">E-mail :</label>
      <input
        type="text"
        name="email"
        id="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <span>{formik.errors.email}</span>
      ) : null}

      <label htmlFor="password">Password</label>
      <div>
        <input
          type={isShow1 ? "text" : "password"}
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <img src={eye} loading="lazy" id="eye" onClick={showToggle1} />
      </div>
      {formik.touched.password && formik.errors.password ? (
        <span>{formik.errors.password}</span>
      ) : null}
      <label htmlFor="passwordConfirm">Confirm Password</label>
      <div>
        <input
          type={isShow2 ? "text" : "password"}
          name="passwordConfirm"
          id="passwordConfirm"
          value={formik.values.passwordConfirm}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <img src={eye} loading="lazy" id="eye" onClick={showToggle2} />
      </div>
      {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
        <span>{formik.errors.passwordConfirm}</span>
      ) : null}

      <button type="submit">Register </button>
      <Link to={"/login"}>login ?</Link>
    </form>
  );
}

export default Registration;
