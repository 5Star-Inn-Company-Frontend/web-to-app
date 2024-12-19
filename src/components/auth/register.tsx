import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form"
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons"
import { IconInput } from "../global/iconinput"
import { Text } from "../global/text"
import { RegisterformSchema } from "../../lib/schema"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Authprompt from "./authprompt"
import Partnership from "./partnership"

export function SignupForm() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const form = useForm<z.infer<typeof RegisterformSchema>>({
        resolver: zodResolver(RegisterformSchema),
        defaultValues: {
            fullname: "",
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof RegisterformSchema>) {
        const {
            fullname,
            email,
            password
        } = values;

        const name = fullname;

        let details = { name, email, password };
        // console.log(details);
        setIsLoading(true)

        try {
            let response = await fetch("https://web2app.prisca.5starcompany.com.ng/api/register", {
                method: "POST",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(details),

            })

            //log response error
            if (!response.ok) {
                throw new Error('Unprocessable content!');
            } else if (response.ok) {
                let responseData = await response.json();
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes

                // Assuming the token is inside the response data, e.g., responseData.token
                const token = responseData.token;
                const dataMessage = responseData.message;

                // Store the token in localStorage
                localStorage.setItem('authToken', token);  // Save token in localStorage
                console.log('Token saved: ', token);
                console.log('Message: ', dataMessage);

                localStorage.setItem("user-info", JSON.stringify(responseData))

                //navigate to homepage after successful login
                setTimeout(() => navigate('/auth/signin'), 2000); //delayed to allow toast display

                toast.success("User Created Successfully!!!", {
                    position: "bottom-right",
                    draggable: true
                })
            }


        } catch (dataMessage) {
            console.error("error:", dataMessage);
            toast.error(`${dataMessage}`, {
                position: "bottom-right",
                draggable: true
            })
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <div className="flex flex-col my-2">

            <Text
                style="text-xl font-lato font-bold leading-[140%] mb-4 text-primary60 text-center"
                value="BECOME AN EXCLUSIVE MEMBERS"
            />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                    <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                            <FormItem>
                                <IconInput
                                    type="text"
                                    category="formInput"
                                    placeHolder="Full Name"
                                    field={field}
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                                Become a Member
                            </Button>
                        )}
                        <ToastContainer transition={Bounce} draggable />
                    </div>
                    <Authprompt action="signup" />

                </form>
                <Partnership />
            </Form>

        </div>
    )
}
