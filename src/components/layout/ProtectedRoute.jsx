"use client";

import { redirect } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

/**
 * Wraps any page that requires authentication.
 * Redirects to /login if no valid session is found.
 */
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <LoadingSpinner />;

  if (!isAuthenticated) {
    redirect("/login");
  }

  return children;
}
