import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/pages/RootLayout';
import { HomePage } from '@/pages/HomePage';
import { ProductsPage } from '@/pages/ProductsPage';
import { OrdersPage } from '@/pages/OrdersPage';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/orders', element: <OrdersPage /> },
    ],
  },
]);
