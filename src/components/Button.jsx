import React from "react";

export default function Button({
  children,
  className = "",
  onClick,
  variant = "default",
  size = "md",
}) {
  // size styles
  const sizeClasses =
    size === "lg"
      ? "px-8 py-4 text-lg"
      : size === "sm"
      ? "px-3 py-1 text-sm"
      : "px-6 py-3";

  // variant styles
  const variantClasses =
    variant === "outline"
      ? "border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
      : "bg-white text-teal-700 hover:bg-gray-100";

  return (
    <button
      onClick={onClick}
      className={`rounded-full font-medium transition shadow-xl ${variantClasses} ${sizeClasses} ${className}`}
    >
      {children}
    </button>
  );
}
