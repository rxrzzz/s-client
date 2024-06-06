import axios from "axios";

type Error = {
  error_type?: string;
  error: string;
  isSuccess: false;
};
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${token}`
  }
});
api.interceptors.response.use(
  (resp) => {
    return resp.data;
  },
  (error: Error) => {
    return Promise.reject({ error });
  }
);
