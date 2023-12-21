import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-semibold">
          <Link href='/'>
            My Dashboard
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/dashboard" className="px-3 py-2 hover:bg-gray-700 rounded">Dashboard</Link>
          <Link href="/workbook" className="px-3 py-2 hover:bg-gray-700 rounded">Workbook</Link>
          <Link href="/settings" className="px-3 py-2 hover:bg-gray-700 rounded">Settings</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;