import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { getCookie } from "../../../../assets/js/utlis";
import { Auth } from "../../../../apis/Auth";

const useDateGetter = () => {
  const authUtility = new Auth();
  const token = getCookie("token");
  console.log(token);

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const toggle = (e) => {
    e.target.name === "showPassword"
      ? setShowPassword((pre) => !pre)
      : setShowPasswordConfirm((pre) => !pre);
  };

  const submitFunction = (values) => authUtility.resetPassword(token, values);

  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirm: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required"),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => submitFunction(values),
  });

  return { showPassword, showPasswordConfirm, toggle, formik };
};

export default useDateGetter;
