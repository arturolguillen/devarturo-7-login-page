import MobileIllustrationImage from "@/images/zenspace_login_image_2.png";
import Image from "next/image";

export default function MobileIllustration() {
    return (
        <div className="md:hidden w-full bg-slate-100 p-6">
            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-lg border border-white">
                <Image
                    src={MobileIllustrationImage}
                    alt={'Mobile Meditation'}
                    className="size-full object-cover"
                />
            </div>
        </div>
    );
}