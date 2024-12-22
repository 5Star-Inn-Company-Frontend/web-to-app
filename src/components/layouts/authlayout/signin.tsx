import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "@/AuthContext";
import Partnership from "./partnership";
import Authprompt from "./authprompt";
import { SigninformSchema } from "@/lib/schema";
import { Text } from "@/components/global/text";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { IconInput } from "@/components/global/iconinput";
import { Button } from "@/components/ui/button";

// Define the type for the SignIn props
interface SignInProps {
  onLogin: (email: string, password: string) => void;
}

export const SigninForm: React.FC<SignInProps> = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof SigninformSchema>>({
    resolver: zodResolver(SigninformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { signIn } = useAuth();

  async function onSubmit(values: z.infer<typeof SigninformSchema>) {
    //destructure the details
    const { email, password } = values;

    onLogin(email, password); // Pass credentials to the parent or another component

    const user = { username: email, psw: password };
    // Call signIn and store user data
    signIn(user);

    const details = { email, password };
    setIsLoading(true);

    //fetch api
    try {
      const response = await fetch(
        "https://web2app.prisca.5starcompany.com.ng/api/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        }
      );

      //log response error
      if (!response.ok) {
        throw new Error("Unprocessable content!");
      }

      const responseData = await response.json();
      // store user details and basic auth credentials in local storage
      // to keep user logged in between page refreshes

      // Assuming the token is inside the response data, e.g., responseData.token
      const token = responseData.token;
      const dataMessage = responseData.message;

      // Store the token in localStorage
      localStorage.setItem("authToken", token); // Save token in localStorage
      console.log("Token saved: ", token);
      console.log("Message: ", dataMessage);

      localStorage.setItem("user-info", JSON.stringify(responseData));
      console.log("Response: ", responseData);

      //navigate to homepage after successful login
      setTimeout(() => navigate("/"), 2000); //delayed to allow toast display

      toast.success(`${dataMessage}`, {
        position: "bottom-right",
        draggable: true,
      });
    } catch (dataMessage) {
      //catch and log error
      console.error("error:", dataMessage);
      toast.error(`${dataMessage}`, {
        position: "bottom-right",
        draggable: true,
      });
    } finally {
      //make sure isLoading returns false
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col my-2 font-lato ">
      <Text
        style="text-xl font-lato font-bold leading-[140%] text-primary60 text-center"
        value="WELCOME BACK BECOME AN"
      />
      <Text
        style="text-xl font-lato font-bold leading-[140%] text-primary60 mb-4 text-center"
        value="EXCLUSIVE MEMBERS"
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <IconInput
                    type="email"
                    category="formInput"
                    placeHolder="Email"
                    field={field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <IconInput
                    type="password"
                    category="formInput"
                    placeHolder="Password"
                    field={field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div
            className="flex justify-end items-end bg-[#24243E] rounded-md mt-4">
            {isLoading ? (
              <Button
                disabled
                className="w-full h-12 text-white bg-[#24243E] p-[0.5rem]"
              >
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin text-white" />
                Please wait...
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full text-base flex justify-center text-white font-bold h-12 bg-[#24243E] p-[0.5rem]"
              >
                Proceed to my Account
              </Button>
            )}
            <ToastContainer transition={Bounce} draggable />
          </div>
          <Authprompt action="signin"/>
        </form>

        <Partnership/>
      </Form>
    </div>
  );
};
