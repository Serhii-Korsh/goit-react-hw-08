import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete api.defaults.headers.common.Authorization;
};

export const signUp = createAsyncThunk(
  "auth/signup",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "/users/signup",
        JSON.stringify(credentials),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("token", data.token);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Registration failed");
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "/users/login",
        JSON.stringify(credentials),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("token", data.token);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      console.error("Login error:", error.response?.data);
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await api.post("/users/logout");
      localStorage.removeItem("token");
      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.response?.data || "Logout failed");
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return rejectWithValue("No token available");
    }

    setAuthHeader(token);

    try {
      const { data } = await api.get("/users/current");
      return data;
    } catch (error) {
      localStorage.removeItem("token");
      return rejectWithValue(error.response?.data || "Fetch user failed");
    }
  }
);
