import LeftColumn from "@/components/LeftColumn";
import Logo from "@/components/Logo";
import MainContent from "@/components/MainContent";
import MainWrapper from "@/components/MainWrapper";

export default function Home() {
    return (
        <MainWrapper>
            <LeftColumn>
                <div className="mb-10">
                    <Logo />
                    <MainContent />
                </div>
            </LeftColumn>
        </MainWrapper>
    );
}
