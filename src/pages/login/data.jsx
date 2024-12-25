import { useFormik } from "formik";
import { useContext, useState } from "react";
import { Auth } from "../../apis/Auth";
import { AppContext } from "../../context/AppContext";

const useDataGetter = () => {
  const [isShow, setIsShow] = useState(false);
  const { setUser } = useContext(AppContext);

  const setUserfunction = (data) => {
    setUser({ ...data });
  };

  const showToggle = () => {
    setIsShow((pre) => !pre);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const authUtlis = new Auth();

  const handleSubmit = (values) => authUtlis.login(values, setUserfunction);

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

    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: handleSubmit,
  });

  return { isShow, showToggle, formik };
};

export { useDataGetter };
