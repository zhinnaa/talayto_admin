import axios from "axios";
axios.defaults.baseURL = 'http://api.talayto.com/v1';
axios.interceptors.request.use(function (config) { 
    config.headers['access-token'] = localStorage.getItem("access-token")  
    config.headers['Content-Type'] = 'application/json'
    return config;
}, function (error) { 
 return Promise.reject(error);
});
export default axios;