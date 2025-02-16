export const apiClient = async (url: string, options?: RequestInit) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Network error");
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
