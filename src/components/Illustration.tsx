import IllustrationImage from "@/images/zenspace_login_image_1.png";
import Image from "next/image";

export default function Illustration() {
    return (
        <div className="w-full aspect-4/5 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 transform transition-transform group-hover:scale-[1.02] duration-700">
            <Image
                src={IllustrationImage}
                alt={'Meditation Illustration'}
                className="size-full object-cover"
            />
        </div>
    );
}