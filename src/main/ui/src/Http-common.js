import axios from "axios";
import AuthHeader from "./Service/Auth/AuthHeader";

export default axios.create({
  baseURL: "https://retroshare-company.herokuapp.com/retroshare",
  headers: {
    "Content-type": "application/json",
    Authoritation: AuthHeader(),
  },
});


