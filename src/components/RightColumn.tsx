export default function RightColumn({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="hidden md:flex flex-col bg-slate-100 p-8">
            <div className="size-full rounded-4xl overflow-hidden relative group bg-indigo-50 flex flex-col items-center justify-center p-12 text-center">
                {children}
            </div>
        </div>
    );
}