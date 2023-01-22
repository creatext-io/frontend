import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getDocuments = () =>
  axios
    .get(
      `${import.meta.env.VITE_BASE_API}/documents/${window.localStorage.getItem(
        "userId"
      )}`
    )
    .then((res) => {
      return res.data.data;
    });

export const useDocuments = () => {
  const { data } = useQuery({
    queryKey: ["documents"],
    queryFn: getDocuments,
    refetchOnMount: false,
  });
  return { data };
};
