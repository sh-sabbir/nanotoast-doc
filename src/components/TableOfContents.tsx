"use client"

import { useEffect, useState } from "react";

interface TableOfContentsProps {
    items: {
        href: string;
        label: string;
    }[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "0% 0% -80% 0%",
            }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.href);
            if (element) observer.observe(element);
        });

        return () => {
            items.forEach((item) => {
                const element = document.getElementById(item.href);
                if (element) observer.unobserve(element);
            });
        };
    }, [items]);

    return (
        <div className="hidden xl:block sticky top-8 w-64 ml-auto">
            <h3 className="text-sm font-medium mb-4">On this page</h3>
            <ul className="space-y-2.5">
                {items.map((item) => (
                    <li key={item.href}>
                        <a
                            href={`#${item.href}`}
                            className={`text-sm block ${
                                activeId === item.href ? "text-primary font-medium" : "text-secondary hover:text-primary"
                            }`}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
} 