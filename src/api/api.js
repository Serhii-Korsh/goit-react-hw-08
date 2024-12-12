import axios from "axios";

const api = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete api.defaults.headers.common.Authorization;
};

export default api;

// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://674f68b8bb559617b26f1689.mockapi.io",
// });

// export default api;
