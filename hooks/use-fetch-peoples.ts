// import { useEffect, useState } from "react";
// import ky from "ky";

import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";

export type User = {
  id: number;
  rating: number;
  guestsCount: number;
  image: string;
  nickname: string;
  isToyOnline: boolean;
  roomId: number;
  status: string;
  createdAt: string;
  roomPrice: string;
};

export function useFetch() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => {
      axios.get("https://cam-kitty.vercel.app/api/admin/hosts").then((res) => {
        console.log(res.data);
        return res.data;
      });
    },
  });
  return { isPending, error, newData: data, isFetching };
}
