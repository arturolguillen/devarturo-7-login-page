import { Eye } from "lucide-react";
import Link from "next/link";

export default function PasswordInput() {
    return (
        <div className="relative group">
            <div className="relative">
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder={' '}
                    required
                    className="peer block w-full px-5 py-4 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500/20 transition-all text-slate-900 placeholder-transparent pr-12"
                />
                <label htmlFor="password" className="absolute left-5 top-4 text-slate-500 font-medium pointer-events-none transition-all origin-left">{'Password'}</label>
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors focus:outline-none cursor-pointer">
                    <Eye />
                </button>
            </div>
            <div className="mt-2 px-1 flex justify-between items-center text-sm">
                <span className="text-slate-500 italic">{'Enter at least 8 characters'}</span>
                <Link href={'#'} className="text-indigo-600 font-semibold hover:underline">{'Forgot Password?'}</Link>
            </div>
        </div>
    );
}