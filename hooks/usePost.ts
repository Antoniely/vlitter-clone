import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const usePost = (postId: string) => {
  const { data, error, isLoading, mutate } = useSWR(postId ? `/api/posts/${postId}` : null, fetcher, { refreshInterval: 1000 });

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default usePost;