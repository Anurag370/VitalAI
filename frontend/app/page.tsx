"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  HeartPulse,
  Lock,
  User,
  Users,
} from "lucide-react";

export default function Home() {
  const router = useRouter();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!userId || !password) {
      return;
    }

    setIsLoading(true);

    // Demo loading effect
    setTimeout(() => {
      if (role === "patient") {
        router.push("/patient");
      } else if (role === "doctor") {
        router.push("/doctor/dashboard");
      } else if (role === "healthworker") {
        router.push("/healthworker");
      } else if (role === "management") {
        router.push("/under-progress?section=Management");
      }
    }, 1200);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f7f9] p-6">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
        
        {/* Logo */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
            <HeartPulse size={28} />
          </div>

          <h1 className="mt-4 text-2xl font-semibold text-slate-900">
            Welcome to HealthAI
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Sign in to access your healthcare dashboard
          </p>
        </div>

        {/* Form */}
        <div className="mt-8 space-y-5">

          {/* User ID */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-800">
              User ID
            </label>

            <div className="flex items-center rounded-xl border border-slate-300 px-4 transition focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-100">
              <User size={18} className="text-slate-500" />

              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter your user ID"
                className="w-full bg-transparent px-3 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-800">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-slate-300 px-4 transition focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-100">
              <Lock size={18} className="text-slate-500" />

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-transparent px-3 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-500 transition hover:text-teal-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-800">
              Login As
            </label>

            <div className="flex items-center rounded-xl border border-slate-300 px-4 transition focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-100">
              <Users size={18} className="text-slate-500" />

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-transparent px-3 py-3 text-sm font-medium text-slate-800 outline-none"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="healthworker">Health Worker</option>
                <option value="management">Management</option>
              </select>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="button"
            onClick={handleLogin}
            disabled={isLoading}
            className="flex w-full items-center justify-center rounded-xl bg-teal-600 py-3 text-sm font-medium text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Signing in...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </section>
    </main>
  );
}