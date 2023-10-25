import { create } from "apisauce";
const baseURL = process.env.REACT_APP_BASE_URL;
console.log(baseURL);
const apiClient = create({
  baseURL: baseURL,
});
let authToken;

try {
  authToken = JSON.parse(localStorage.getItem("token"));
} catch (error) {
  authToken = null;
}

if (authToken) apiClient.setHeader("authorization", `Bearer ${authToken}`);

function setAuthToken(token) {
  apiClient.setHeader("authorization", `Bearer ${token}`);
}

export { setAuthToken };
export default apiClient;
