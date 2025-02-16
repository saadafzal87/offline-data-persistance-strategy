export const saveFailedMutation = (mutation: any) => {
  const failedMutations = JSON.parse(localStorage.getItem("failedMutations") || "[]");
  failedMutations.push(mutation);
  localStorage.setItem("failedMutations", JSON.stringify(failedMutations));
};

export const retryFailedMutations = async () => {
  const failedMutations = JSON.parse(localStorage.getItem("failedMutations") || "[]");

  for (const mutation of failedMutations) {
    try {
      await fetch("/api/update", {
        method: "POST",
        body: JSON.stringify(mutation),
      });
    } catch (error) {
      console.error("Retry failed:", error);
      return;
    }
  }

  localStorage.removeItem("failedMutations");
};
