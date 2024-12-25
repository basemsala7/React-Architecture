import { useFormik } from "formik";
import { useContext, useState } from "react";
import { Auth } from "../../apis/Auth";
import { AppContext } from "../../context/AppContext";

const useDataGetter = () => {
  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const { setUser } = useContext(AppContext);


  const setUserfunction = (data) => {
    setUser({ ...data });
  };

  const showToggle1 = () => {
    setIsShow1((pre) => !pre);
  };
  const showToggle2 = () => {
    setIsShow2((pre) => !pre);
  };

  const authUtli = new Auth();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const handleSubmit = (values) =>
    authUtli.register({ ...values, role: "lead-guide" } , setUserfunction);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 5) {
      errors.password = "Password Must be more Strong ";
    }
    if (!values.passwordConfirm) {
      errors.passwordConfirm = "Required";
    } else if (values.passwordConfirm.length < 5) {
      errors.passwordConfirm = "Password Must be more Strong ";
    }
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "name Must be small ";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: handleSubmit,
  });

  return { isShow1, showToggle1, isShow2, showToggle2, formik };
};

export { useDataGetter };
