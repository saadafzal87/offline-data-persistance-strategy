self.addEventListener("sync", (event) => {
  if (event.tag === "sync-failed-mutations") {
    event.waitUntil(syncFailedRequests());
  }
});

async function syncFailedRequests() {
  const failedRequests = JSON.parse(localStorage.getItem("failedRequests") || "[]");
  for (const request of failedRequests) {
    try {
      await fetch("/api/update", {
        method: "POST",
        body: JSON.stringify(request),
      });
    } catch (error) {
      console.error("Failed to sync request", error);
    }
  }
  localStorage.removeItem("failedRequests");
}
