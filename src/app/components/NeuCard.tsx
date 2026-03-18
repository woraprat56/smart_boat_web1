import { ReactNode } from "react";

interface NeuCardProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export function NeuCard({ children, className = "", gradient = false }: NeuCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-[8px_8px_16px_rgba(163,177,198,0.15),-8px_-8px_16px_rgba(255,255,255,0.7)] p-6 ${
        gradient ? "bg-gradient-to-br from-white to-gray-50" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
