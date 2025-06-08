import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import Authprompt from "./authprompt";
import Partnership from "./partnership";
import { ForgetPasswordFormSchema } from "@/lib/schema";
import { Text } from "@/components/global/text";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { IconInput } from "@/components/global/iconinput";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { forgotPasswordApi } from "@/api/auth";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

export function ForgetPassword() {
    const form = useForm<z.infer<typeof ForgetPasswordFormSchema>>({
        resolver: zodResolver(ForgetPasswordFormSchema),
        defaultValues: { email: "" },
    });

    const { mutate, isPending } = useMutation({
        mutationFn: forgotPasswordApi,
        onSuccess: (data) => {
            toast.success(`${data.status} to your email`, {
                duration: 6000,
            });
            form.reset({ email: "" });
        },
        onError: (error: Error | AxiosError) => {
            if (axios.isAxiosError(error)) {
                toast.error(error?.response?.data.message);
            }
        },
    });

    async function onSubmit(values: z.infer<typeof ForgetPasswordFormSchema>) {
        const { email } = values;
        mutate(email);
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
                        {isPending ? (
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
                <Authprompt action="reset" />
                <Partnership />
            </Form>
        </div>
    );
}
