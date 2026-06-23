import EmailInput from "@/components/EmailInput";
import LeftColumn from "@/components/LeftColumn";
import LoginButton from "@/components/LoginButton";
import LoginForm from "@/components/LoginForm";
import Logo from "@/components/Logo";
import MainContent from "@/components/MainContent";
import MainWrapper from "@/components/MainWrapper";
import PasswordInput from "@/components/PasswordInput";

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
                    <PasswordInput />
                    <LoginButton />
                </LoginForm>
            </LeftColumn>
        </MainWrapper>
    );
}
