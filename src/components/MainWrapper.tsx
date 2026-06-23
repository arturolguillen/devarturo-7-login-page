export default function MainWrapper({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200/50">
            {children}
        </main>
    );
}