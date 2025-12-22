"use client";

import React from "react";

export default function RecentTasksCardSkeleton() {
  return (
    <div className="border rounded-lg p-4 shadow-md animate-pulse space-y-4">
      <div className="h-6 w-1/3 bg-gray-300 rounded mb-3"></div>

      {Array.from({ length: 5 }).map((_, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center p-3 bg-gray-100 rounded-md"
        >
          <div className="space-y-2">
            <div className="h-4 w-32 bg-gray-300 rounded"></div>
            <div className="h-3 w-24 bg-gray-300 rounded"></div>
          </div>
          <div className="flex gap-2">
            <div className="h-4 w-12 bg-gray-300 rounded"></div>
            <div className="h-4 w-12 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
