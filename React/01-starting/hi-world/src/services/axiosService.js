import axiosConfig from "../utils/config/axios.config";

export function getRandomUser(){
  return axiosConfig.get('/', { // https://randomuser.me/api
    validateStatus: function (status) {
      return status < 500 // resolve only if teh status code is less than 500
    }
  })
}
