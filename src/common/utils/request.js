import axios from "axios";
const FileDownload = require("js-file-download");

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;
axios.defaults.timeout = 30 * 1000;
axios.defaults.validateStatus = (status) => status < 500;

// axios.defaults.withCredentials = true;

const defaults = {
  headers: {
    "Content-Type": "application/json",
  },
  error: {
    code: "INTERNAL_ERROR",
    message:
      "Something went wrong. Please check your internet connection or contact our support.",
    status: 503,
    data: {},
  },
};

const api = (method, url, variables) => {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method,
      headers: defaults.headers,
      params: method === "get" ? variables : undefined,
      data: method !== "get" ? variables : undefined,
    })
      .then((response) => {
        if (response && response.status === 401) {
          // forceLogout();
        }
        console.log(response);
        resolve(response);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            // forceLogout();
          }
          reject(error.response.data);
        } else {
          reject(defaults.error);
        }
      });
  });
};

export const downloadFile = (method, url, variables, file_name) => {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method,
      headers: defaults.headers,
      params: method === "get" ? variables : undefined,
      data: method !== "get" ? variables : undefined,
      responseType: "blob",
    }).then(
      (response) => {
        FileDownload(response.data, file_name);
        resolve(response.data);
      },
      (error) => {
        if (error.response) {
          reject(error.response.data);
        } else {
          reject(defaults.error);
        }
      }
    );
  });
};

export const UploadFile = (
  url,
  params,
  method = "POST",
  successCallback,
  failCallback
) => {
  let formData = new FormData();
  const keys = Object.keys(params);
  keys.forEach((key) => {
    if (params[key] !== null) {
      if (Array.isArray(params[key])) {
        for (let i = 0; i < params[key].length; i++) {
          formData.append(key + `[${i}]`, params[key][i]);
        }
      } else if (typeof params[key] === "object") {
        if (typeof params[key].name == "string") {
          formData.append(key, params[key]);
        } else {
          for (var child_key in params[key]) {
            formData.append(`${key}.${child_key}`, params[key][child_key]);
          }
        }
      } else {
        formData.append(key, params[key]);
      }
    }
  });
  const options = {
    method: method,
    body: formData,
    headers: {
      Authorization: axios.defaults.headers.common["Authorization"],
      Accept: "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((result) => result.json())
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(defaults.error);
      });
  });
};

export const setAccessToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const Api = {
  get: (...args) => api("get", ...args),
  post: (...args) => api("post", ...args),
  put: (...args) => api("put", ...args),
  patch: (...args) => api("patch", ...args),
  delete: (...args) => api("delete", ...args),
};

const forceLogout = () => {
  localStorage.clear();
  axios.defaults.headers.common["Authorization"] = "";
  if (!window.location.pathname.includes("login")) {
    window.location.href = "/login";
  }
};
