import { Leaf } from "lucide-react";

export default function Logo() {
    return (
        <div className="flex items-center gap-2 mb-8">
            <div className="size-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                <Leaf className="text-white" />
            </div>
            <span className="text-2xl font-bold text-indigo-600 tracking-tight">{'ZenSpace'}</span>
        </div>
    );
}