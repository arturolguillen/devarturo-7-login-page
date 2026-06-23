export default function AppleLoginButton() {
    return (
        <button
            type="button"
            className="flex items-center justify-center gap-3 py-3.5 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all active:scale-95 cursor-pointer"
        >
            <svg className="w-5 h-5 fill-slate-900" viewBox="0 0 24 24">
                <path
                    d="M17.05 20.28c-.96 0-2.04-.36-3.04-.36-1.01 0-2.2.36-3.04.36-2.52 0-5.36-3.82-5.36-8.21 0-4.04 2.53-6.17 4.92-6.17 1.01 0 1.95.36 2.67.36.72 0 1.83-.36 2.7-.36 2.04 0 3.82 1.05 4.7 2.65-3.85 2.05-3.23 7.42.5 9.07-.8 2-2.14 3.02-3.05 3.02zM12.03 5.48c-.03-2.31 1.91-4.28 4.14-4.28.2 2.4-2 4.41-4.14 4.28z">
                </path>
            </svg>
            <span className="font-bold text-slate-700">{'Apple'}</span>
        </button>
    );
}