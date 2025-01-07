import { SigninForm } from "@/features/auth/signin";
import { useState } from "react";


export const SigninPage = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = (email: string, password: string) => {
    setCredentials({ email, password });
    console.log(credentials)
  };

  return (
      <SigninForm onLogin={handleLogin} />
  );
};
