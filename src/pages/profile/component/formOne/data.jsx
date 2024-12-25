import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { Auth } from "../../../../apis/Auth";
import { AppContext } from "../../../../context/AppContext";

function useDataGetter() {
  const { user } = useContext(AppContext);
  const { photo } = user;

  const [file, setFile] = useState();
  const authUtailty = new Auth();

  useEffect(() => {
    if (photo !== "default.jpg")
      setFile(`http://localhost:1500/img/users/${photo}`);
  }, []);

  const handleSubmit = (values) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });
    authUtailty.updateUser(formData);
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: handleSubmit,
  });

  function imageHandleChange(e) {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(URL.createObjectURL(uploadedFile));
      formik.setFieldValue("photo", uploadedFile);
    }
  }

  return { formik, imageHandleChange, file };
}

export default useDataGetter;
