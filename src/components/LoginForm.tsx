export default function LoginForm({ children }: {
    children: React.ReactNode;
}) {
    return (
        <form action="#" method="post" className="space-y-6">
            {children}
        </form>
    );
}