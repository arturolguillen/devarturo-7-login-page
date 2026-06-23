import { Quote } from "lucide-react"

export default function QuoteCard() {
    return (
        <div className="mt-12 bg-white/90 backdrop-blur-md p-8  rounded-3xl max-w-sm shadow-xl shadow-indigo-100 flex flex-col items-center">
            <Quote className="text-indigo-600 mb-4" />
            <p className="text-xl font-semibold text-slate-800 leading-tight italic">{'"The soul always knows what to do to heal itself. The challenge is to silence the mind."'}</p>
        </div>
    );
}