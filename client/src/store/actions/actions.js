// import {apiCall} from "./api"

export const setWeb = (formData, filesCSV) => ({
    type: "SET", 
    formData,
    filesCSV
})

export const resetWeb = () => ({
    type: "RESET"
})

export const resetData = () => {
    return dispatch => {
        return dispatch(resetWeb())
    }
}

export const fetchData = (formData, filesCSV) => {
    return dispatch => {
        return dispatch(setWeb(formData, filesCSV))
    }
}

// apiCall("POST", "/api/submitdata", formData)
//                 .then(res => dispatch(setWeb(res)))
//                 .catch(err => console.log(err));