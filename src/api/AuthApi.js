//call auth api here
import axios from "axios";
import ROOT_URL from "../config"

const SIGNIN_URL = `${ROOT_URL}/auth/signin`
const SIGNUP_URL = `${ROOT_URL}/auth/signup`

export const loginRequest = async(username, password) => {
    const userCredentials= {
        username: username,
        password: password
    }
    try {
        const response = await axios.post(SIGNIN_URL, userCredentials, {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
            }})
        console.log(response.data)
        return response.data
    } catch (err) {
        console.log("Error occurred while sending login request", err.message)
    }
}

export const registerRequest = async(userDetails) => {
    try {
        const response = await axios.post(SIGNUP_URL, userDetails, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            }})
        console.log(response.data.message)
        return response.data
    } catch (err) {
        console.log("Error occurred while sending register request", err.message);
    }
}