import AppleLoginButton from "@/components/AppleLoginButton";
import EmailInput from "@/components/EmailInput";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import Illustration from "@/components/Illustration";
import LeftColumn from "@/components/LeftColumn";
import LoginButton from "@/components/LoginButton";
import LoginContinueWith from "@/components/LoginContinueWith";
import LoginForm from "@/components/LoginForm";
import Logo from "@/components/Logo";
import MainContent from "@/components/MainContent";
import MainWrapper from "@/components/MainWrapper";
import PasswordInput from "@/components/PasswordInput";
import QuoteCard from "@/components/QuoteCard";
import RightColumn from "@/components/RightColumn";
import SignUpLink from "@/components/SignUpLink";
import SocialLogins from "@/components/SocialLogins";

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
                    <LoginContinueWith />
                    <SocialLogins>
                        <GoogleLoginButton />
                        <AppleLoginButton />
                    </SocialLogins>
                    <SignUpLink />
                </LoginForm>
            </LeftColumn>
            <RightColumn>
                <Illustration />
                <QuoteCard />
            </RightColumn>
        </MainWrapper>
    );
}
