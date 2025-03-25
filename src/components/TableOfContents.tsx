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
        console.log("Items to observe:", items);
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log("Intersection entry:", {
                        id: entry.target.id,
                        isIntersecting: entry.isIntersecting,
                        intersectionRatio: entry.intersectionRatio
                    });
                    
                    if (entry.isIntersecting) {
                        console.log("Setting active ID to:", entry.target.id);
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0% -35% 0%",
                threshold: 0,
            }
        );

        // Observe all section headings
        items.forEach((item) => {
            const element = document.getElementById(item.href.replace('#', ''));
            console.log(`Looking for element with id: ${item.href.replace('#', '')}`, element ? 'found' : 'not found');
            
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            items.forEach((item) => {
                const element = document.getElementById(item.href.replace('#', ''));
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [items]);

    console.log("Current activeId:", activeId);

    return (
        <aside className="w-[240px] hidden xl:block sticky top-16 h-[calc(100vh-8rem)]">
            <span className="text-[13px] text-secondary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M2.75 12H21.25M2.75 5.75H21.25M2.75 18.25H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                On this page
            </span>
            <div className="relative">
                <div
                    aria-hidden="true"
                    className="w-[3px] h-5 bg-primary absolute left-0 rounded-full -translate-x-[1px]"
                    style={{ transition: "top 0.25s", top: `${Math.max(0, items.findIndex(item => item.href === `#${activeId}`) * 28)}px` }}
                ></div>
                <ul className="mt-4 dotted-left dotted space-y-2">
                    {items.map((item) => (
                        <li className="h-fit flex" key={item.href}>
                            <a
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById(item.href.replace('#', ''));
                                    element?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`text-[13px] hover:text-primary transition-colors ml-5 h-5 inline-block truncate ${
                                    activeId === item.href.replace('#', '') ? "text-primary" : "text-secondary"
                                }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
} 