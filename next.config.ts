import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function nextConfig(phase: string): NextConfig {
  const basePath = phase === PHASE_DEVELOPMENT_SERVER ? "" : "/Portfolio";

  return {
    output: "export",
    trailingSlash: true,
    basePath,
    assetPrefix: basePath || undefined,
    env: {
      NEXT_PUBLIC_BASE_PATH: basePath,
    },
  };
}
