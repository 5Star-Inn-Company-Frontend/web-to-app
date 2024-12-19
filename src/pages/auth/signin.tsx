import { AuthLayout } from "@/components/auth/layout";
import { SigninForm } from "@/components/auth/signin";
import { useState } from "react";


export const SigninPage = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = (email: string, password: string) => {
    setCredentials({ email, password });
  };

  return (
    <AuthLayout
      route="/auth/signup"
      routeText={<h6>Not a Member yet? <span className="underline font-semibold">JOIN NOW</span></h6>}
    >
      <SigninForm onLogin={handleLogin} />
    </AuthLayout>
  );
};
