import React, { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext();
export const useToast = () => useContext(ToastContext);

let idCounter = 1;
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(
    (message, { type = "info", ttl = 4000 } = {}) => {
      const id = idCounter++;
      setToasts((s) => [...s, { id, message, type }]);
      setTimeout(() => {
        setToasts((s) => s.filter((t) => t.id !== id));
      }, ttl);
      return id;
    },
    []
  );

  const removeToast = useCallback((id) => {
    setToasts((s) => s.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastContext;
