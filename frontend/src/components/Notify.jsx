import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const Notify = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    // Optional: Reset form here if needed
    // e.target.reset();
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
        // Redirect to home after popup closes
        navigate("/");
      }, 5000); // Auto-close after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [showPopup, navigate]);

  return (
    <div className="min-h-screen bg-[#020617] text-gray-200 flex items-center justify-center px-4 py-24 ">
      <section
        className="flex flex-col items-center text-white max-w-4xl w-full border border-dashed border-slate-500 
        rounded-2xl px-6 py-5 rounded-3xl border-2 border-dashed border-black bg-purple-900 text-white px-4 py-2 text-xs 
        font-semibold uppercase text-black transition-all duration-300 
        hover:translate-x-[-3px] hover:translate-y-[-3px] hover:rounded-2xl hover:shadow-[3px_3px_0px_#413eab]

        active:translate-x-0 active:translate-y-0 active:rounded-3xl active:shadow-none"
        style={{
          background: "linear-gradient(90deg, #0a0126 0%, #000851 100%)",
        }}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-center text-4xl font-semibold max-w-2xl">
            We’re Almost{" "}
            <span className="bg-gradient-to-t from-indigo-600 to-black p-1 bg-left inline-block bg-no-repeat">
              Ready
            </span>
          </h2>
          <p className="text-center text-slate-400 max-w-lg mt-3">
            ResuCurate is currently in early access. We’re polishing the final
            experience to make sure every resume passes real ATS systems.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center mt-10 text-sm rounded-full h-14 max-w-xl w-full"
        >
          <input
            className="bg-transparent outline-none rounded-full px-4 h-full flex-1 placeholder:text-slate-400 text-white"
            placeholder="Enter your email address"
            type="email"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-full h-11 mr-1 px-10 flex items-center justify-center hover:bg-indigo-900 active:scale-95 transition ml-3"
          >
            Subscribe
          </button>
        </form>
        <p className="text-slate-400 mt-6 text-xs text-center">
          Get notified the moment ResuCurate is fully live...
        </p>
        <Link
          to="/"
          className="mt-8 text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          ← Back to Home
        </Link>
      </section>

      {/* Thank You Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
          <div className="relative bg-[#0b1020] border border-white/10 rounded-2xl shadow-2xl p-8 max-w-md mx-4">
            <button
              onClick={() => {
                setShowPopup(false);
                navigate("/");
              }}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="size-5 text-slate-300" />
            </button>

            <div className="text-center">
              <div className="mx-auto mb-4 flex items-center justify-center size-16 rounded-full bg-green-500/10">
                <svg
                  className="size-8 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">
                Thanks for Signing Up!
              </h2>

              <p className="text-slate-400">You’re on the list!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notify;
