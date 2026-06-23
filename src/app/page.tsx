import EmailInput from "@/components/EmailInput";
import LeftColumn from "@/components/LeftColumn";
import LoginForm from "@/components/LoginForm";
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
                <LoginForm>
                    <EmailInput />
                </LoginForm>
            </LeftColumn>
        </MainWrapper>
    );
}
