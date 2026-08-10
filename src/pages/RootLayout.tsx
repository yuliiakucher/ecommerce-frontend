import { Outlet } from 'react-router-dom';
import Nav from '@/components/Nav';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <Nav />
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
