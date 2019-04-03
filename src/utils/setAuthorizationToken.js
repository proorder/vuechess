import axios from "axios";

export default function(token = false) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Token ${token}`;
  } else {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("name");
    delete axios.defaults.headers.common["Authorization"];
    window.location.reload();
  }
}
