import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "../ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "../ui/form"
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { IconInput } from "../global/iconinput";
import { Text } from "../global/text";
import { ResetPasswordformSchema } from "../../lib/schema";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Authprompt from "./authprompt";
import Partnership from "./partnership";

export function ResetPasswordForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const form = useForm<z.infer<typeof ResetPasswordformSchema>>({
        resolver: zodResolver(ResetPasswordformSchema),
        defaultValues: {
            email: ""
        },
    })

    const navigate = useNavigate();

    async function onSubmit(values: z.infer<typeof ResetPasswordformSchema>) {
        // console.log(values)
        const {
            email
        } = values;

        let userEmail = { email };
        setIsLoading(true)

        //fetch API 
        try {
            let response = await fetch("https://web2app.prisca.5starcompany.com.ng/api/forgot-password", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userEmail)
            });

            //log response error
            if (!response.ok) {
                throw new Error('Unprocessablee content!');
            }
            else if (response.ok) {
                response = await response.json()
                console.log('Response: ', response);
                localStorage.setItem("user-info", JSON.stringify(response))

                //navigate to signin pg after successful reset
                setTimeout(() => navigate('/auth/signin'), 2000); //delayed to allow toast display

                toast.success("Password reset link sent to your email!", {
                    position: "bottom-right",
                    draggable: true
                })
            }
        } catch (error) {
            console.error("error:", error);
            toast.error("No user with that email address.", {
                position: "bottom-right",
                draggable: true
            })
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
                                Forget Password
                            </Button>
                        )}
                        <ToastContainer transition={Bounce} draggable />
                    </div>
                    <Authprompt action="reset" />
                </form>
                <Partnership />
            </Form>
        </div>
    )
}