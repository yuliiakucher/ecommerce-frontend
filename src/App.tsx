import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';


// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>);
}
