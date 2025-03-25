'use client';

import { div } from "framer-motion/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        title: "Basics",
        subLinks: [
            {
                title: "Getting Started",
                href: "/getting-started",
            }
        ]
    },
    {
        title: "Usage",
        subLinks: [
            {
                title: "Usage",
                href: "/usage",
            },
            {
                title: "Vanilla JS",
                href: "/usage/vanilla",
            },
            {
                title: "React",
                href: "/usage/react",
            },
            {
                title: "Vue",
                href: "/usage/vue",
            },
            {
                title: "Alpine.js",
                href: "/usage/alpine",
            },
        ],
    },
    {
        title: "Other",
        subLinks: [
            {
                title: "Options",
                href: "/options",
            },
            {
                title: "Styling",
                href: "/styling",
            },
        ]
    },

];

export default function DocsNav() {
    const pathname = usePathname();

    return (
        <nav className="pt-5 pb-4 dotted dotted-right bg-brand-alt fixed top-0 h-screen hidden w-[240px] lg:flex flex-col">
            <div className="flex flex-col px-4">
                <div className="flex gap-1 items-baseline pb-3.5 dotted-bottom">
                    <a className="flex items-center gap-2" href="/">
                        <img src="/nanotoast-alt.svg" alt="NanoToast" width={126} height={24} />
                    </a>
                </div>
            </div>
            <div className="grow overflow-y-auto pt-5 px-5">
                {links.map((link, index) => (
                    <div key={index}>
                        <span className="text-xs text-tertiary font-medium inline-block mb-2">{link.title}</span>

                        {link.subLinks && (
                            <ul className="space-y-1">
                                {link.subLinks.map((subLink) => (
                                    <li key={subLink.href}>
                                        <Link
                                            href={subLink.href}
                                            className="h-7 flex items-center font-medium text-[13px] text-secondary px-2 -ml-2 hover:bg-el-hover-bg rounded-md data-[active=true]:bg-el-hover-bg data-[active=true]:text-primary w-[calc(100%+15px)]"
                                            data-active={pathname === subLink.href}
                                        >
                                            {subLink.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {index !== links.length - 1 && (
                            <div aria-hidden="true" className="h-px w-[90%] mx-auto dotted-bottom pb-5 mb-5"></div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-auto px-4">
                <div className="flex justify-between items-center pt-5 dotted-top">
                    <a href="https://github.com/emilkowalski/sonner" className="text-tertiary hover:text-primary" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M12 1.95068C17.525 1.95068 22 6.42568 22 11.9507C21.9995 14.0459 21.3419 16.0883 20.1198 17.7902C18.8977 19.4922 17.1727 20.768 15.1875 21.4382C14.6875 21.5382 14.5 21.2257 14.5 20.9632C14.5 20.6257 14.5125 19.5507 14.5125 18.2132C14.5125 17.2757 14.2 16.6757 13.8375 16.3632C16.0625 16.1132 18.4 15.2632 18.4 11.4257C18.4 10.3257 18.0125 9.43818 17.375 8.73818C17.475 8.48818 17.825 7.46318 17.275 6.08818C17.275 6.08818 16.4375 5.81318 14.525 7.11318C13.725 6.88818 12.875 6.77568 12.025 6.77568C11.175 6.77568 10.325 6.88818 9.525 7.11318C7.6125 5.82568 6.775 6.08818 6.775 6.08818C6.225 7.46318 6.575 8.48818 6.675 8.73818C6.0375 9.43818 5.65 10.3382 5.65 11.4257C5.65 15.2507 7.975 16.1132 10.2 16.3632C9.9125 16.6132 9.65 17.0507 9.5625 17.7007C8.9875 17.9632 7.55 18.3882 6.65 16.8757C6.4625 16.5757 5.9 15.8382 5.1125 15.8507C4.275 15.8632 4.775 16.3257 5.125 16.5132C5.55 16.7507 6.0375 17.6382 6.15 17.9257C6.35 18.4882 7 19.5632 9.5125 19.1007C9.5125 19.9382 9.525 20.7257 9.525 20.9632C9.525 21.2257 9.3375 21.5257 8.8375 21.4382C6.8458 20.7752 5.11342 19.502 3.88611 17.799C2.65881 16.096 1.9989 14.0498 2 11.9507C2 6.42568 6.475 1.95068 12 1.95068Z" fill="currentColor"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    );
} 