"use client"

import { toast } from "@iamsabbir/nanotoast";

interface ToastButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

export default function ToastButton({ onClick, children, className = '' }: ToastButtonProps) {
    return (
        <button
            type="button"
            className={`bg-brand hover:bg-brand-hover text-white text-sm font-medium px-4 py-2 rounded-lg ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
} 