import { InvalidateQueryFilters, QueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";

export const useOfflineMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newData: any) => {
      const response = await fetch("/api/update", {
        method: "POST",
        body: JSON.stringify(newData),
      });
      if (!response.ok) throw new Error("Network error");
      return response.json();
    },
    onMutate: async (newData) => {
      await queryClient.cancelQueries(["dashboardData"] as QueryFilters<any, any, any, any>);
      const previousData = queryClient.getQueryData(["dashboardData"]);

      queryClient.setQueryData(["dashboardData"], (old: any) => [...old, newData]);

      return { previousData };
    },
    onError: (_error, newData, context) => {
      if (!navigator.onLine) {
        const failedRequests = JSON.parse(localStorage.getItem("failedRequests") || "[]");
        failedRequests.push(newData);
        localStorage.setItem("failedRequests", JSON.stringify(failedRequests));
      } else if (context?.previousData) {
        queryClient.setQueryData(["dashboardData"], context.previousData);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(["dashboardData"] as InvalidateQueryFilters<any, any, any, any>);
    },
  });
};
