import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
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
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

// Define the type for the SignIn props

export const SigninForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

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
            dispatch(login(data));
            toast.success(data.message);
            navigate("/");
        },
        onError: (error: Error | AxiosError) => {
            if (axios.isAxiosError(error)) {
                toast.error(error?.response?.data.message);
            }
        },
    });

    function onSubmit(values: z.infer<typeof SigninformSchema>) {
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
                                <div className="relative">
                                    <FormControl>
                                        <IconInput
                                            type={showPassword ? "text" : "password"}
                                            category="formInput"
                                            placeHolder="Password"
                                            field={field}
                                        />
                                    </FormControl>
                                    <div className="flex justify-end items-center mt-1">
                                        <button
                                            onClick={() => navigate("/auth/forget-password")}
                                            className="text-gray-500 cursor-pointer"
                                        >
                                            Forget password?
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        aria-label={
                                            showPassword ? "Hide password" : "Show password"
                                        }
                                    >
                                        {showPassword ? (
                                            <FiEye size={18} />
                                        ) : (
                                            <FiEyeOff size={18} />
                                        )}
                                    </button>
                                </div>
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
                                Proceed to my Account
                            </Button>
                        )}
                    </div>
                    <Authprompt action="signin" />
                </form>

                <Partnership />
            </Form>
        </div>
    );
};
