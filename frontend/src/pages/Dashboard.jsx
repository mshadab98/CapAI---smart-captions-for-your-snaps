import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-5xl mx-auto ">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-xl">
              {user?.username?.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Dashboard
            </h1>
            <p className="text-gray-600 mt-2">
              Welcome back, <span className="font-semibold text-blue-600">{user?.username}</span> 👋
            </p>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            Getting Started Guide
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-100 hover:border-blue-200 transition-all duration-200">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h3 className="text-gray-800 font-medium mb-1">
                  Create Your First Post
                </h3>
                <p className="text-gray-600 text-sm">
                  Go to <span className="text-blue-600 font-medium">"Create Post"</span> to upload an image and let our AI generate engaging captions automatically
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-100 hover:border-blue-200 transition-all duration-200">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h3 className="text-gray-800 font-medium mb-1">
                  Secure & Reliable
                </h3>
                <p className="text-gray-600 text-sm">
                  Your account is protected with secure authentication. Stay logged in safely until you choose to logout.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-100 hover:border-blue-200 transition-all duration-200">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h3 className="text-gray-800 font-medium mb-1">
                  Copy & Share
                </h3>
                <p className="text-gray-600 text-sm">
                  Easily copy generated captions and share your perfectly captioned images across all social platforms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}