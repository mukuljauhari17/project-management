"use client";

import React from "react";

export default function ProjectProgressCardSkeleton() {
  return (
    <div className="border rounded-lg p-4 shadow-md animate-pulse space-y-4">
      <div className="h-6 w-1/3 bg-gray-300 rounded"></div>

      {Array.from({ length: 5 }).map((_, idx) => (
        <div key={idx} className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 w-3/4 bg-gray-300 rounded-full"></div>
          </div>
          <div className="flex justify-between text-sm">
            <div className="h-3 w-12 bg-gray-300 rounded"></div>
            <div className="h-3 w-8 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
