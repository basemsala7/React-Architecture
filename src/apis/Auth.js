import axios from "axios";
import { setSecureCookie, SwalControlar } from "../assets/js/utlis";
const swal = new SwalControlar();
class Auth {
  login(values, callback) {
    return axios.post("/api/v1/users/login", values).then((response) => {
      setSecureCookie("token", response?.data.token, 10);
      callback(response?.data?.user);
      swal
        .success("تم", response.data?.message || "Registerd Successfuly")
        .then((_) => (window.location.href = "/"));
    });
  }

  register(values, callback) {
    return axios.post(`api/v1/users/signup`, values).then((response) => {
      setSecureCookie("token", response.data?.token, 10);
      callback(response?.data?.user);

      swal
        .success("Done", response.data?.message || "Registerd Successfuly")
        .then((_) => (window.location.href = "/"));

      return response.data;
    });
  }

  getProfile(setUser) {
    return axios
      .get("api/v1/users/Me")
      .then((response) => setUser({ ...response?.data?.data?.data }));
  }

  updateUser(values) {
    return axios
      .patch("api/v1/users/updateMe", values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response?.data, "updateUser");
        swal.success("Doen", response.data?.message || "Updated  Successfuly");
      });
  }

  resetPassword(token, values) {
    return axios
      .patch(`api/v1/users/resetPassword/${token}`, values)
      .then((response) => console.log(response));
  }
}
export { Auth };
