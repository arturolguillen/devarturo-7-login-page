import LeftColumn from "@/components/LeftColumn";
import Logo from "@/components/Logo";
import MainWrapper from "@/components/MainWrapper";

export default function Home() {
    return (
        <MainWrapper>
            <LeftColumn>
                <div className="mb-10">
                    <Logo />
                </div>
            </LeftColumn>
        </MainWrapper>
    );
}
