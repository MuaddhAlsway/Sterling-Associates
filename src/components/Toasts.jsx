import React from "react";
import { useToast } from "../context/ToastContext";

export default function Toasts() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed right-4 top-4 z-50 flex flex-col gap-3">
      {toasts.map((t) => (
        <div
          key={t.id}
          role="status"
          className={`max-w-sm w-full px-4 py-3 rounded shadow-lg border-l-4 ${
            {
              info: "border-blue-500 bg-white",
              success: "border-green-500 bg-white",
              error: "border-red-500 bg-white",
            }[t.type] || "border-blue-500 bg-white"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="text-sm text-[#1A1D23]">{t.message}</div>
            <button
              onClick={() => removeToast(t.id)}
              className="text-sm text-[#6B7280] hover:text-[#1B3A5F]"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
