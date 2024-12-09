import { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function useApiFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchApi({ url, method = "get", body = null }) {
    setLoading(true);
    setError(null);
    try {
      const res = await api({
        url,
        method: method.toUpperCase(),
        data: method !== "GET" ? body : undefined,
      });
      switch (method.toUpperCase()) {
        case "POST":
          setData((prev) => [...prev, res.data]);
          break;
        case "DELETE":
          {
            const urlId = parseInt(url.split("/").pop());
            setData((prev) => prev.filter((item) => item.id !== urlId));
          }
          break;
        default:
          setData(res.data);
          break;
      }
    } catch (e) {
      console.log(e);
      setError(e.message || "An error occured");
    } finally {
      setLoading(false);
    }
  }

  return [data, fetchApi, loading, error];
}

export default useApiFetch;
