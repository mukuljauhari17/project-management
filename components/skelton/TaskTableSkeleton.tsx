"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Settings } from "lucide-react";
import React from "react";

const TaskTableSkeleton = ({ rows = 5 }: { rows?: number }) => {
  return (
    <motion.div
      className="w-full bg-white dark:bg-transparent rounded-lg shadow-sm border border-gray-200 dark:border-gray-500 overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[2000px]">
          {/* Header identical to real table */}
          <thead className="bg-gray-50 dark:bg-transparent border-b border-gray-200 dark:border-gray-500">
            <tr className="divide-x divide-gray-200 dark:divide-gray-500">
              {[
                { label: "Task", width: "w-40" },
                { label: "Assigned To", width: "w-32" },
                { label: "Reported To", width: "w-32" },
                { label: "Priority", width: "w-24" },
                { label: "Status", width: "w-28" },
                { label: "Label", width: "w-32" },
                { label: "Created At", width: "w-40" },
                { label: "Updated At", width: "w-40" },
              ].map((col, idx) => (
                <th
                  key={idx}
                  className={`px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider ${col.width}`}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 font-bold text-gray-500 dark:text-gray-300 hover:text-gray-700"
                  >
                    {col.label}
                    <ArrowUpDown className="ml-1 h-3 w-3" />
                  </Button>
                </th>
              ))}

              {/* Settings Icon Column */}
              <th className="px-4 py-3 text-center text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider w-16">
                <Settings className="h-4 w-4 mx-auto" />
              </th>
            </tr>
          </thead>

          {/* Body shimmer rows */}
          <tbody className="bg-white dark:bg-transparent">
            {Array.from({ length: rows }).map((_, i) => (
              <motion.tr
                key={i}
                className="border-b border-gray-200 dark:border-gray-500 divide-x divide-gray-200 dark:divide-gray-500"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <td className="px-2 py-3">
                  <div className="h-4 w-40 rounded shimmer" />
                </td>
                <td className="px-2 py-3">
                  <div className="h-4 w-20 rounded shimmer" />
                </td>
                <td className="px-2 py-3">
                  <div className="h-4 w-24 rounded shimmer" />
                </td>
                <td className="px-2 py-3">
                  <div className="h-4 w-28 rounded shimmer" />
                </td>
                <td className="px-2 py-3 flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full shimmer" />
                  <div className="h-4 w-24 rounded shimmer" />
                </td>
                <td className="px-2 py-3">
                  <div className="h-4 w-32 rounded shimmer" />
                </td>
                <td className="px-2 py-3">
                  <div className="h-4 w-32 rounded shimmer" />
                </td>
                <td className="px-2 py-3 text-center">
                  <div className="h-5 w-5 mx-auto rounded shimmer" />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Inline shimmer CSS */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: 200px 0;
          }
        }
        .shimmer {
          background: linear-gradient(
            90deg,
            rgba(229, 231, 235, 0.1) 0%,
            rgba(229, 231, 235, 0.5) 50%,
            rgba(229, 231, 235, 0.1) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        :global(.dark .shimmer) {
          background: linear-gradient(
            90deg,
            rgba(55, 65, 81, 0.2) 0%,
            rgba(107, 114, 128, 0.4) 50%,
            rgba(55, 65, 81, 0.2) 100%
          );
        }
      `}</style>
    </motion.div>
  );
};

export default TaskTableSkeleton;
