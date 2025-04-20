import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Authprompt from "./authprompt";
import Partnership from "./partnership";
import { ResetPasswordformSchema } from "@/lib/schema";
import { Text } from "@/components/global/text";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { IconInput } from "@/components/global/iconinput";
import { Button } from "@/components/ui/button";

export function ResetPasswordForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const form = useForm<z.infer<typeof ResetPasswordformSchema>>({
        resolver: zodResolver(ResetPasswordformSchema),
        defaultValues: { email: "" },
    });

    const navigate = useNavigate();

    async function onSubmit(values: z.infer<typeof ResetPasswordformSchema>) {
        const { email } = values;
        const userEmail = { email };

        setIsLoading(true);

        try {
            const response = await fetch(
                "https://web2app.prisca.5starcompany.com.ng/api/forgot-password",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userEmail),
                }
            );

            if (!response.ok) {
                throw new Error("Unprocessable content!");
            }

            const data = await response.json();
            localStorage.setItem("user-info", JSON.stringify(data));

            setTimeout(() => navigate("/auth/signin"), 2000);

            toast.success("Password reset link sent to your email!", {
                position: "bottom-right",
                draggable: true,
            });
        } catch (error) {
            console.error("Error:", error);
            toast.error("No user with that email address.", {
                position: "bottom-right",
                draggable: true,
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col my-5">
            <Text
                style="text-xl font-lato font-bold leading-[140%] mb-4 text-primary60 text-center"
                value="FORGET PASSWORD"
            />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <IconInput
                                        type="email"
                                        category="formInput"
                                        placeHolder="Email Address"
                                        field={field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end items-end bg-[#24243E] rounded-md mt-4">
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
                                Forget Password
                            </Button>
                        )}
                    </div>
                </form>
                <ToastContainer transition={Bounce} draggable />
                <Authprompt action="reset" />
                <Partnership />
            </Form>
        </div>
    );
}
