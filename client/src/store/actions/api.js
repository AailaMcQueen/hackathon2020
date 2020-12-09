import axios from "axios"

export function apiCall(path, data){
    return new Promise((resolve, reject)=>{
        return axios.post(path, data).then(res=> {
            return resolve(res.data)
        })
        .catch(err => {
            return reject(err)
        })
    })
}