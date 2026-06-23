export default function EmailInput() {
    return (
        <div className="relative group">
            <input
                type="email"
                name="email"
                id="email"
                required
                placeholder={' '}
                className="peer block w-full px-5 py-4 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500/20 transition-all text-slate-900 placeholder-transparent"
            />
            <label htmlFor="email" className="absolute left-5 top-4 text-slate-500 font-medium pointer-events-none transition-all origin-left">{'Email Address'}</label>
        </div>
    );
}