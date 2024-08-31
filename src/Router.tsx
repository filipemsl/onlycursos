import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Dashboard } from './components/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
