import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Shimmer = () => (
  <>
    <div
      className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] 
      bg-gradient-to-r 
      from-transparent 
      via-gray-300/40 
      to-transparent 
      dark:via-white/10"
    />
  </>
);

const SkeletonBox = ({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={`relative overflow-hidden bg-gray-200 dark:bg-gray-800 rounded ${className}`}
  >
    <Shimmer />
    {children}
  </div>
);

const TaskSideCanvasSkeleton: React.FC = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

      {/* Left Content Area */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <div className="flex sticky top-0 items-start bg-white dark:bg-gray-900 justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex-1 pr-4">
            {/* Breadcrumb skeleton */}
            <div className="flex items-center gap-2 mb-3">
              <SkeletonBox className="h-3 w-20" />
              <span className="text-gray-400">/</span>
              <SkeletonBox className="h-3 w-16" />
              <span className="text-gray-400">/</span>
              <SkeletonBox className="h-3 w-12" />
              <span className="text-gray-400">/</span>
              <SkeletonBox className="h-3 w-24" />
            </div>

            {/* Title skeleton */}
            <SkeletonBox className="h-8 w-3/4 mb-3" />

            {/* Status badge skeleton */}
            <SkeletonBox className="h-6 w-20" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            <div className="max-w-3xl space-y-6">
              {/* Description Section */}
              <div className="space-y-4">
                <SkeletonBox className="h-6 w-32" />
                <div className="space-y-2">
                  <SkeletonBox className="h-4 w-full" />
                  <SkeletonBox className="h-4 w-5/6" />
                  <SkeletonBox className="h-4 w-4/5" />
                </div>
                <SkeletonBox className="h-6 w-24 rounded-full" />
              </div>

              {/* SubTasks Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <SkeletonBox className="h-6 w-40" />
                  <SkeletonBox className="h-8 w-8 rounded" />
                </div>
                {[1, 2, 3].map((i) => (
                  <SkeletonBox key={i} className="h-16 w-full rounded-lg" />
                ))}
              </div>

              {/* Bugs Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <SkeletonBox className="h-6 w-32" />
                  <SkeletonBox className="h-8 w-8 rounded" />
                </div>
                {[1, 2].map((i) => (
                  <SkeletonBox key={i} className="h-16 w-full rounded-lg" />
                ))}
              </div>

              {/* Comments Section */}
              <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                <SkeletonBox className="h-6 w-28" />
                {[1, 2].map((i) => (
                  <div key={i} className="flex gap-3">
                    <SkeletonBox className="h-10 w-10 rounded-full flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <SkeletonBox className="h-4 w-32" />
                      <SkeletonBox className="h-16 w-full rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - DetailRightSidebar Skeleton */}
      <div className="w-[420px] mt-[130px] border-l border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6 space-y-6 overflow-y-auto h-full">
          {/* Details Section */}
          <div className="space-y-4 border-2 border-gray-200 dark:border-gray-700 rounded-md p-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <SkeletonBox className="h-5 w-20" />
              <SkeletonBox className="h-8 w-8 rounded" />
            </div>

            {/* Detail Items */}
            <div className="space-y-3">
              {[
                "Assignee",
                "Reporter",
                "Labels",
                "Start Date",
                "End Date",
                "Dev Start Date",
                "Dev End Date",
                "QA Start Date",
                "QA End Date",
                "Sprint",
                "Priority",
                "Story Points",
                "Original Estimate",
              ].map((label, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <SkeletonBox className="h-4 w-24" />
                  <SkeletonBox className="h-8 w-32 rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Additional sections placeholder */}
          <div className="space-y-3">
            <SkeletonBox className="h-6 w-40" />
            <SkeletonBox className="h-32 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskSideCanvasSkeleton;
