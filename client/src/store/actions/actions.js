// import {apiCall} from "./api"

export const setWeb = (data) => ({
    type: "SET", 
    data
})

export const resetWeb = () => ({
    type: "RESET"
})

export const fetchData = (formData) => {
    return dispatch => {
        return dispatch(setWeb(formData))
    }
}

// apiCall("POST", "/api/submitdata", formData)
//                 .then(res => dispatch(setWeb(res)))
//                 .catch(err => console.log(err));