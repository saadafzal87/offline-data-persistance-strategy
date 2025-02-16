import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistedClient, Persister, persistQueryClient } from "@tanstack/react-query-persist-client";
import { get, set, del } from "idb-keyval";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    },
  },
});

export function createIDBPersister(idbValidKey: IDBValidKey = "reactQuery") {
  return {
    persistClient: async (client: PersistedClient) => {
      await set(idbValidKey, client);
    },
    restoreClient: async () => {
      return await get<PersistedClient>(idbValidKey);
    },
    removeClient: async () => {
      await del(idbValidKey);
    },
  } satisfies Persister;
}

persistQueryClient({
  queryClient,
  persister: createIDBPersister(),
});

export const QueryProvider = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
