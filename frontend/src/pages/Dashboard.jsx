import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-linear-to-br from-white to-orange-50 rounded-2xl shadow-lg border border-orange-100 p-8 mt-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-linear-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">
              {user?.username?.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-linear-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Welcome back, <b className="text-orange-700">{user?.username}</b> 👋
            </p>
          </div>
        </div>

        <div className="bg-white/80 rounded-xl p-6 border border-orange-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
            Getting Started
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200">
              <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                1
              </div>
              <div>
                <span className="text-gray-700">
                  Use <b className="text-orange-600">"Create Post"</b> to upload an image
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  Our AI will automatically generate engaging captions for your images
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200">
              <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                2
              </div>
              <div>
                <span className="text-gray-700">
                  Secure authentication system
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  Cookie-based auth keeps you logged in securely until you logout
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-linear-to-br from-orange-500 to-pink-500 text-white rounded-xl p-4 text-center shadow-md">
            <div className="text-2xl font-bold">AI</div>
            <div className="text-sm opacity-90">Powered Captions</div>
          </div>
          <div className="bg-linear-to-br from-orange-400 to-amber-400 text-white rounded-xl p-4 text-center shadow-md">
            <div className="text-2xl font-bold">Easy</div>
            <div className="text-sm opacity-90">To Use</div>
          </div>
          <div className="bg-linear-to-br from-pink-400 to-rose-400 text-white rounded-xl p-4 text-center shadow-md">
            <div className="text-2xl font-bold">Fast</div>
            <div className="text-sm opacity-90">Processing</div>
          </div>
        </div>
      </div>
    </div>
  );
}