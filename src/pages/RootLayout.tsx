import { Outlet, Link } from 'react-router-dom';
import Nav from '@/components/Nav';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        {/*<nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">*/}
        {/*  <Link to="/" className="text-lg font-semibold">*/}
        {/*    Store*/}
        {/*  </Link>*/}
        {/*  <div className="flex gap-4 text-sm">*/}
        {/*    <Link to="/products" className="text-slate-500 hover:text-slate-900">*/}
        {/*      Products*/}
        {/*    </Link>*/}
        {/*    <Link to="/orders" className="text-slate-500 hover:text-slate-900">*/}
        {/*      Orders*/}
        {/*    </Link>*/}
        {/*  </div>*/}
        {/*</nav>*/}
        <Nav />
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
