import { useEffect, useState } from "react";
import ky from "ky";

export type Users = {
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
  const [newData, setNewData] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const resData: Users = await ky
        .get("https://cam-kitty.vercel.app/api/admin/hosts")
        .json();
      //   if (resData) setNewData(resData.data);
      console.log(resData.data);

      //   try {
      //     const response = await fetch(
      //       "https://cam-kitty.vercel.app/api/admin/hosts"
      //     );
      //     if (!response.ok) throw new Error(response.statusText);

      //     const resData = await response.json();
      //     setNewData(resData.data);
      //   } catch (error) {
      //     console.log(error);
      //   }
    };

    fetchData();
  }, []);

  return { newData };
}
