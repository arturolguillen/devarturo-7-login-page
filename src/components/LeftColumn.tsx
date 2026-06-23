export default function LeftColumn({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="p-8 md:p-16 flex flex-col justify-center">
            {children}
        </div>
    );
}