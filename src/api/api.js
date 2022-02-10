import axios from "axios";

const api = axios.create({
  baseURL: "http://10.10.11.8:8000",
  headers: {
    "Content-type": "application/json",
  },
});

export default api;

export const loginUser = async ({ email, password }) => {
  try {
    const response = await api.post("/api/auth/login", {
      email,
      password,
    });
    return response;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const signUpUser = async ({ name, surname, email, password }) => {
  try {
    const response = await api.post("/api/auth/register", {
      name,
      surname,
      email,
      password,
    });
    return response;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const logoutUser = async () => {
  const response = await api.post("/api/auth/logout");
  return response;
};
