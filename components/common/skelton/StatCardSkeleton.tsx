"use client";

import React from "react";

interface StatCardSkeletonProps {
  size?: "small" | "medium" | "large";
  variant?: "default" | "light" | "lightGreen" | "lightRed" | "lightYellow";
}

const StatCardSkeleton = ({
  size = "medium",
  variant = "light",
}: StatCardSkeletonProps) => {
  // match the card sizes
  const sizeClasses = {
    small: "px-6 py-5",
    medium: "px-8 py-10",
    large: "px-10 py-14",
  };

  // match the background color variants
  const variantClasses = {
    default: "bg-white/60",
    light: "bg-[#f4f4ff]/60",
    lightGreen: "bg-[#e6f9ec]/60",
    lightRed: "bg-[#FFECEC]/60",
    lightYellow: "bg-[#FFFDE7]/60",
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-lg shadow-md animate-pulse
      `}
    ></div>
  );
};

export default StatCardSkeleton;
