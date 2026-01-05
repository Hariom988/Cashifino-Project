'use client'
import LoginForm from "@/components/loginPage";
import { GoogleOAuthProvider } from "@react-oauth/google";



export default function MobilePage() {
  return (<>
    <GoogleOAuthProvider clientId="601412165454-nvio4b7nle9qgl36157j57q81rraeajm.apps.googleusercontent.com">
      <LoginForm />
    </GoogleOAuthProvider>
  </>);
}