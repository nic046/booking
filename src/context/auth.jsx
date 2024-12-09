import { create } from "zustand";
import api from "../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ls = window.localStorage;



export const useAuth = create((set) => ({
  user: JSON.parse(ls.getItem("user")) || null,
  token: ls.getItem("token") || null,
  isAuth: !!ls.getItem("token"),
  status: "idle", // No se ha iniciado ninguna solicitud
  error: null,

  login: async ({ email, password }) => {
    set({ status: "pending" });
    try {
      const res = await api.post("users/login", { email, password });
      const { user, token } = res.data;

      ls.setItem("token", token);
      ls.setItem("user", JSON.stringify(user));

      set({
        user,
        token,
        isAuth: true,
        status: "resolved", //Se completo la exitosamente
        error: null,
      });
      return true;
    } catch (error) {
      set({
        status: "rejected", //Se rechazo la petición
        error: error?.response?.data?.message || error?.message,
      });
      return false;
    }
  },

  logout: () => {
    ls.removeItem("token"), ls.removeItem("user");
    set({
      user: null,
      token: null,
      isAuth: false,
      status: "idle",
      error: null,
    });
    return true;
  },

  register: async ({ firstName, lastName, email, password, gender }) => {
    set({ status: "pending" });
    try {
      const res = await api.post("users", {
        firstName,
        lastName,
        email,
        password,
        gender,
      });
      set({
        status: "resolver",
        error: null,
      });
      return true;
    } catch (error) {
      set({
        status: "rejected",
        error: error?.response?.data?.message || error?.message,
      });
      return false;
    }
  },
}));
