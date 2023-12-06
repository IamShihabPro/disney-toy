import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { AuthContext } from "../provider/AuthProvider";

const useCarts = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: carts = [] } = useQuery({
    queryKey: ["carts", user?.email],

    queryFn: async () => {
      const res = await fetch(
        `https://disney-toys-server.vercel.app/carts/${user?.email}`
      );

      return res.json();
    },
  });

  return [carts, refetch];
};

export default useCarts;
