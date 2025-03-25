"use client"

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
    content: React.ReactNode;
    position?: 'top' | 'right' | 'bottom' | 'left';
    className?: string;
}

export default function Tooltip({
    content,
    position = 'top',
    className = '',
}: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
    const triggerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const updatePosition = () => {
        if (!triggerRef.current || !tooltipRef.current) return;

        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();

        let top = 0;
        let left = 0;

        switch (position) {
            case 'top':
                top = triggerRect.top - tooltipRect.height - 8;
                left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
                break;
            case 'right':
                top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
                left = triggerRect.right + 8;
                break;
            case 'bottom':
                top = triggerRect.bottom + 8;
                left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
                break;
            case 'left':
                top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
                left = triggerRect.left - tooltipRect.width - 8;
                break;
        }

        // Ensure tooltip stays within viewport
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        if (left < 0) left = 0;
        if (left + tooltipRect.width > viewportWidth) left = viewportWidth - tooltipRect.width;
        if (top < 0) top = 0;
        if (top + tooltipRect.height > viewportHeight) top = viewportHeight - tooltipRect.height;

        setTooltipStyle({ top, left });
    };

    useEffect(() => {
        if (isVisible) {
            updatePosition();
            window.addEventListener('scroll', updatePosition);
            window.addEventListener('resize', updatePosition);
        }

        return () => {
            window.removeEventListener('scroll', updatePosition);
            window.removeEventListener('resize', updatePosition);
        };
    }, [isVisible, position]);

    const tooltipContent = isVisible && (
        <div
            ref={tooltipRef}
            className={`fixed z-50 w-48 px-3 py-1.5 text-xs bg-brand text-white rounded-md shadow-lg ${className}`}
            style={tooltipStyle}
        >
            {content}
            <div
                className={`absolute w-2 h-2 bg-brand transform rotate-45 ${
                    position === 'top'
                        ? 'bottom-[-4px] left-1/2 -translate-x-1/2'
                        : position === 'right'
                        ? 'left-[-4px] top-1/2 -translate-y-1/2'
                        : position === 'bottom'
                        ? 'top-[-4px] left-1/2 -translate-x-1/2'
                        : 'right-[-4px] top-1/2 -translate-y-1/2'
                }`}
            />
        </div>
    );

    return (
        <div
            ref={triggerRef}
            className="inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <button type="button" className='h-[22px] w-[22px] grid place-items-center hover:bg-brand-alt/50 text-tertiary hover:text-brand rounded'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 7.375C11.6548 7.375 11.375 7.65482 11.375 8C11.375 8.34518 11.6548 8.625 12 8.625C12.3452 8.625 12.625 8.34518 12.625 8C12.625 7.65482 12.3452 7.375 12 7.375Z" fill="currentColor" stroke="currentColor" strokeWidth="0.25"></path></svg>
            </button>
            {typeof document !== 'undefined' && createPortal(tooltipContent, document.body)}
        </div>
    );
} 