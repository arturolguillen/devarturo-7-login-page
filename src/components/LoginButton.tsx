export default function LoginButton() {
    return (
        <button
            type="submit"
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-100 transition-all active:scale-[0.98] cursor-pointer"
        >
            {'Login to ZenSpace'}
        </button>
    );
}