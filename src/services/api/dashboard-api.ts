import { apiClient } from "../../utils/api-client";

export const fetchDashboardData = async () => {
  const API_URL = "https://fakestoreapi.com/products";
  return apiClient(API_URL);
};
