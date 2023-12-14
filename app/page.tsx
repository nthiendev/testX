import React from "react";
import AuthGuard from "./route/AuthGuard";
import Landing from "./views/landing";

export default function HomePage() {
  return (
    <AuthGuard>
      <Landing />
    </AuthGuard>
  );
}
