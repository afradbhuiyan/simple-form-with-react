import { Outlet } from 'react-router-dom';

export default function GuestLayout() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-gray-100">
      <Outlet />
    </main>
  );
}
