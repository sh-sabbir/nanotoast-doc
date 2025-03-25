import Link from 'next/link';

interface DocsNavigationProps {
    prev?: {
        title: string;
        href: string;
    };
    next?: {
        title: string;
        href: string;
    };
}

export default function DocsNavigation({ prev, next }: DocsNavigationProps) {
    return (
        <div className="pt-8 dotted-top my-16 flex">
            {prev && (
                <Link
                    href={prev.href}
                    className="flex items-end gap-0.5 group"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-mb-0.5 text-tertiary group-hover:text-primary group-hover:-translate-x-0.5 transition-all"
                    >
                        <path
                            d="M14 8L10.7071 11.2929C10.3166 11.6834 10.3166 12.3166 10.7071 12.7071L14 16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className="flex flex-col">
                        <span className="text-[13px] text-tertiary">Previous</span>
                        <span className="text-[14px] font-medium text-primary">{prev.title}</span>
                    </div>
                </Link>
            )}
            {next && (
                <Link
                    href={next.href}
                    className="flex items-end gap-0.5 ml-auto group"
                >
                    <div className="flex flex-col">
                        <span className="text-[13px] text-tertiary">Next</span>
                        <span className="text-[14px] font-medium text-primary">{next.title}</span>
                    </div>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-mb-0.5 text-tertiary group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                    >
                        <path
                            d="M10 16L13.2929 12.7071C13.6834 12.3166 13.6834 11.6834 13.2929 11.2929L10 8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
            )}
        </div>
    );
} 