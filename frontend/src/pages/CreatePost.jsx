import { useState } from "react";
import api from "../api/axios";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    setResult(null);

    if (!file) return setErr("Please choose an image");

    const form = new FormData();
    form.append("image", file);

    try {
      setLoading(true);
      const { data } = await api.post("/api/posts", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(data.post);
    } catch (e) {
      setErr(e?.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(result.caption);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Create Post
            </h1>
            <p className="text-gray-600">Upload an image and let AI generate the perfect caption</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {err && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
                {err}
              </div>
            )}

            {/* File Upload Area */}
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors duration-300 bg-gray-50">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer block">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📷</span>
                </div>
                <p className="text-gray-700 font-medium mb-2">
                  {file ? file.name : "Choose an image"}
                </p>
                <p className="text-gray-500 text-sm">
                  Click to browse or drag and drop
                </p>
              </label>
            </div>

            {/* Upload Button */}
            <button
              type="submit"
              disabled={loading || !file}
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Generating Caption...
                </div>
              ) : (
                "Generate AI Caption"
              )}
            </button>
          </form>

          {/* Result Display */}
          {result && (
            <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <h3 className="font-semibold text-gray-900">Caption Generated!</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-2">AI Generated Caption</h4>
                    <p className="text-gray-900 bg-white p-4 rounded-xl border border-gray-200">
                      {result.caption}
                    </p>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="w-full py-2 border border-blue-300 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
                  >
                    {copied ? "✅ Copied!" : "Copy Caption"}
                  </button>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative">
                    <img 
                      src={result.image} 
                      alt="Uploaded preview" 
                      className="rounded-xl shadow-sm max-w-full h-auto max-h-64 object-cover"
                    />
                    <div className="absolute inset-0 border-2 border-white rounded-xl shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}