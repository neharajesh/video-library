import axios from "axios"
import ROOT_URL from "../config"

const getUserDetails = async(user) => {
    try {
        const response = await axios.get(`${ROOT_URL}/users/${user._id}`)
        console.log(response.data)
    } catch (err) {
        console.log("Error Fetching User Details", err.message)
    }
}

export const updateUser = async (user, details) => {
    try {
        if(user.username !== "") {
            const response = await axios.post(`${ROOT_URL}/users/${user._id}`, JSON.stringify(details), {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
            }})
            console.log(response.data)
        }        
    } catch (err) {
        console.log("Error Updating User Details", err.message)
    }
}