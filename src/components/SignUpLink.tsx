import Link from "next/link";

export default function SignUpLink() {
    return (
        <p className="text-center mt-12 text-slate-500">
            <span>{'Don\'t have an account?'}</span>
            &nbsp;
            <Link href={'#'} className="text-indigo-600 font-bold hover:underline">{'Sign up'}</Link>
        </p>
    );
}