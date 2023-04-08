import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useUsers = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/users", fetcher, {
    refreshInterval: 1000,
  });

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;
