import { Navigate, useRoutes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import GuestLayout from '../layouts/GuestLayout';

export default function Router() {
  const element = useRoutes([
    {
      path: '/',
      element: <GuestLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="login" />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        }
      ]
    }
  ]);

  return element;
}
