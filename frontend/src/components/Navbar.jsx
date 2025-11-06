import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  const loc = useLocation();

  async function handleLogout() {
    await logout();
    nav("/login");
  }

   if (loading) {
    return (
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto p-4">
          <span className="text-gray-400 text-sm">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className="font-bold text-2xl text-gray-900 hover:text-blue-600 transition-colors duration-200"
          >
            AI Caption
          </Link>
          {user && (
            <nav className="flex gap-1">
              <Link
                className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  loc.pathname === "/" 
                    ? "bg-blue-50 text-blue-600 border border-blue-100" 
                    : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                }`}
                to="/"
              >
                Dashboard
              </Link>
              <Link
                className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  loc.pathname === "/create" 
                    ? "bg-blue-50 text-blue-600 border border-blue-100" 
                    : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                }`}
                to="/create"
              >
                Create Post
              </Link>
            </nav>
          )}
        </div>
        <div>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                Hello, {user.username}
              </span>
              <button 
                onClick={handleLogout} 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link 
                to="/login" 
                className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}