import { Link } from "react-router-dom";
import eye from "../../../public/icons/Eye.svg";

import { useDataGetter } from "./data.jsx";
function Login() {
  const { isShow, showToggle, formik } = useDataGetter();
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
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
          type={isShow ? "text" : "password"}
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <img src={eye} loading="lazy" id="eye" onClick={showToggle} />
      </div>
      {formik.touched.password && formik.errors.password ? (
        <span>{formik.errors.password}</span>
      ) : null}

      <button type="submit">Login</button>
      <Link to={"/registration"}>Create Account ?</Link>
    </form>
  );
}

export default Login;
