import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Authprompt from "./authprompt";
import Partnership from "./partnership";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { RegisterformSchema } from "@/lib/schema";
import { Text } from "@/components/global/text";
import { IconInput } from "@/components/global/iconinput";
import { useMutation } from "@tanstack/react-query";
import { registerApi } from "@/api/auth";
import axios, { AxiosError } from "axios";

export function SignupForm() {
    const navigate = useNavigate();

    const { isPending, mutate } = useMutation({
        mutationFn: registerApi,
        onSuccess: (data) => {
            toast.success(data.message);
            navigate("/auth/signin");
        },

        onError: (error: Error | AxiosError) => {
            if (axios.isAxiosError(error)) {
                toast.error(error?.response?.data.message);
            }
        },
    });

    const form = useForm<z.infer<typeof RegisterformSchema>>({
        resolver: zodResolver(RegisterformSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof RegisterformSchema>) {
        console.log(values);
        mutate(values);
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
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <IconInput type="text" category="formInput" placeHolder="Full Name" field={field} />
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
                                    <IconInput type="email" category="formInput" placeHolder="Email" field={field} />
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
                    <div className="flex justify-end items-end bg-[#24243E] rounded-md mt-4">
                        {isPending ? (
                            <Button disabled className="w-full h-12 text-white bg-[#24243E] p-[0.5rem]">
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
    );
}
