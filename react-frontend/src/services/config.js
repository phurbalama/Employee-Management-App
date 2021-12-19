import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/v1/employees',
    timeout: 10000,
    params: {} // do not remove this, its added to add params later in the config
});

const requestHandler = (request,basic) => {
    // Token will be dynamic so we can use any app-specific way to always   
    // fetch the new token before making the call
    request.headers.Authorization = basic;
    
  
    return request;
};

const responseHandler = response => {
    if (response.status === 401) {
        window.location = '/login';
    }

    return response;
};

const errorHandler = error => {
    return Promise.reject(error);
};
function setupAxiosInterceptors(basicAuthHeader){
instance.interceptors.request.use(
    (request) => requestHandler(request,basicAuthHeader),
    (error) => errorHandler(error)
);
}
instance.interceptors.response.use(
    (request) => responseHandler(request),
    (error) => errorHandler(error)
);


export default instance
