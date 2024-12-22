import { SigninForm } from "@/components/layouts/authlayout/signin";
import { useState } from "react";


export const SigninPage = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = (email: string, password: string) => {
    setCredentials({ email, password });
  };

  return (
      <SigninForm onLogin={handleLogin} />
  );
};
