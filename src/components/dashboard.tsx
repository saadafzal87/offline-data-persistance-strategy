import { useQuery } from "@tanstack/react-query";
import { useNetworkStatus } from "../hooks/use-network-status";
import { fetchDashboardData } from "../services/api/dashboard-api";
import OfflineBanner from "./offline-banner";

const Dashboard = () => {
  const isOnline = useNetworkStatus();

  const { data, error, isLoading } = useQuery({
    queryKey: ["dashboardData"],
    queryFn: fetchDashboardData,
    enabled: isOnline,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  return (
    <main className="container mx-auto p-4">
      {!isOnline && <OfflineBanner />}
      <h1 className="text-2xl font-bold text-center text-blue-600">Realtime Dashboard</h1>
      <div className="mt-4">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </main>
  );
};

export default Dashboard;
