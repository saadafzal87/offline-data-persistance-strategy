import Dashboard from "./components/dashboard";
import { QueryProvider } from "./providers/query-client-provider";

export default function App() {
  return (
    <QueryProvider>
      <Dashboard />
    </QueryProvider>
  );
}
