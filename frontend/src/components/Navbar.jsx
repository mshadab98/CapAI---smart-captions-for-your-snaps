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

  return (
    <div className="bg-linear-to-r from-rose-50 to-orange-50 border-b border-orange-200 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className="font-bold text-2xl bg-linear-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"
          >
            AI Caption
          </Link>
          {user && (
            <nav className="flex gap-6 text-sm">
              <Link
                className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                  loc.pathname === "/" 
                    ? "bg-white text-orange-600 shadow-md font-medium" 
                    : "text-gray-600 hover:text-orange-500 hover:bg-white/50"
                }`}
                to="/"
              >
                Dashboard
              </Link>
              <Link
                className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                  loc.pathname === "/create" 
                    ? "bg-white text-orange-600 shadow-md font-medium" 
                    : "text-gray-600 hover:text-orange-500 hover:bg-white/50"
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
              <span className="text-sm text-gray-700 bg-white/80 px-3 py-1.5 rounded-full border border-orange-200">
                👋 Hi, {user.username}
              </span>
              <button 
                onClick={handleLogout} 
                className="px-4 py-2 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-sm hover:shadow-md font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link 
                to="/login" 
                className="px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="px-4 py-2 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-sm hover:shadow-md font-medium"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}