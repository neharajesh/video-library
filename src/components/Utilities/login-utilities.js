import axios from "axios";
import { ROOT_URL } from "../../config";

export const loginUser = async (dispatch, loginPayload) => {
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let response = await axios.post(`${ROOT_URL}/auth/signin`, loginPayload, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let data = response.data;
    if (data.username) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }
    dispatch({ type: "LOGIN_ERROR", error: data.errors[0] });
    return;
  } catch (err) {
    console.log("Error occurred while logging in", err.message);
  }
};

export const logout = (dispatch) => {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
};
