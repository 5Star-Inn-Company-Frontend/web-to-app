import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Partnership from "./partnership";
import Authprompt from "./authprompt";
import { SigninformSchema } from "@/lib/schema";
import { Text } from "@/components/global/text";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { IconInput } from "@/components/global/iconinput";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "@/api/auth";
import { useAppDispatch } from "@/redux/hook";
import { login } from "@/redux/auth/authSlice";

// Define the type for the SignIn props

export const SigninForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof SigninformSchema>>({
        resolver: zodResolver(SigninformSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { isPending, mutate } = useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            console.log("data===============", data);
            dispatch(login(data));
            toast.success(data.message);
            navigate("/app");
        },
    });

    function onSubmit(values: z.infer<typeof SigninformSchema>) {
        console.log(values);
        mutate(values);
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
                                Proceed to my Account
                            </Button>
                        )}
                        <ToastContainer transition={Bounce} position="top-right" draggable />
                    </div>
                    <Authprompt action="signin" />
                </form>

                <Partnership />
            </Form>
        </div>
    );
};
