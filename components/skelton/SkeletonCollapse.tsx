"use client";

import React from "react";

export default function SkeletonCollapse() {
    return (
    <>
      {/* Shimmer Styles */}
      <style jsx>{`
        .shimmer {
          position: relative;
          overflow: hidden;
          background: #e5e7eb; /* gray-300 */
        }
        .shimmer::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shimmerMove 1.2s infinite;
        }
        @keyframes shimmerMove {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>

      <div className="mb-4 w-full animate-pulse">
        {/* Header skeleton */}
        <div className="flex items-center gap-3 mb-3 px-4 py-3 bg-gray-100 rounded">
          <div className="w-5 h-5 rounded shimmer"></div>
          <div className="h-4 w-40 rounded shimmer"></div>
          <div className="h-4 w-16 rounded shimmer"></div>
        </div>

       
      </div>
    </>
  );
}

