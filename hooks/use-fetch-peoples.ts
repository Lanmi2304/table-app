import { useEffect, useState } from "react";
import ky from "ky";

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
  const [newData, setNewData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Missing error state <--

  useEffect(() => {
    const fetchData = async () => {
      const resData: { data: User[] } = await ky
        .get("https://cam-kitty.vercel.app/api/admin/hosts")
        .json();

      setNewData(resData.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { newData, loading, setLoading };
}
