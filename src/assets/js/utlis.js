import Swal from "sweetalert2";

function setSecureCookie(name, value, daysToExpire, sameSite = "Strict") {
  const date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  const secure = location.protocol === "https:" ? "Secure" : "";
  const cookieString = `${name}=${value}; ${expires}; path=/; ${secure}; SameSite=${sameSite}`;
  document.cookie = cookieString;
}

function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=").map((c) => c.trim());
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}

const loggedIn = () => {
  return getCookie("token") ? true : false;
};

const logout = (callback) => {  
  setSecureCookie("token", null, -1);
  callback({});
};

class SwalControlar {
  constructor() {}

  success(title, message) {
    return Swal.fire({
      icon: "success",
      title: title || "Good...",
      text: message,
    });
  }

  warning(title, message) {
    return Swal.fire({
      icon: "warning",
      title: title || "Warning...",
      text: message,
    });
  }

  rejected(title, message) {
    return Swal.fire({
      icon: "error",
      title: title || "Oops...",
      text: message,
    });
  }
}
export { setSecureCookie, SwalControlar, getCookie, loggedIn, logout };
