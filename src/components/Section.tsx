interface SectionProps {
    id?: string;
    title: string;
    children: React.ReactNode;
}

function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

export default function Section({ id, title, children }: SectionProps) {
    const sectionId = id || slugify(title);

    return (
        <section id={sectionId} className="scroll-mt-8 mb-16 mt-12">
            <h2 className="text-2xl font-title font-medium mb-4">{title}</h2>
            {children}
        </section>
    );
} 