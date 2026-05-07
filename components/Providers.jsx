"use client";

import React from "react";
import { HelmetProvider } from "react-helmet-async";

/**
 * Providers component to wrap the application with necessary context providers.
 * Includes HelmetProvider for SEO management.
 */
export default function Providers({ children }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}
