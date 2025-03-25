"use client"

import toast from "@iamsabbir/nanotoast";

interface ToastButtonProps {
    message: string;
    children: React.ReactNode;
    className?: string;
    type: "default" | "success" | "error" | "warning" | "info";
}

export default function ToastButton({ message, children, className = '', type = "default" }: ToastButtonProps) {
    const handleClick = () => {
        switch (type) {
            case "success":
                toast.success(message);
                break;
            case "error":
                toast.error(message);
                break;
            case "warning":
                toast.warning(message);
                break;
            case "info":
                toast.info(message);
                break;
            default:
                toast(message);
                break;
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`bg-brand hover:bg-brand-hover text-white text-sm font-medium px-4 py-2 rounded-lg ${className}`}
        >
            {children}
        </button>
    );
} 