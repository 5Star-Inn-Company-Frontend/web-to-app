import * as z from "zod";

export const RegisterformSchema = z.object({
    name: z
        .string({
            required_error: "full Name field is required.",
        })
        .min(5, { message: "Full Name field is required." }),
    email: z
        .string({
            required_error: "email field is required.",
        })
        .email()
        .min(5, { message: "Please enter a valid email address." }),
    password: z
        .string({
            required_error: "password field is required.",
        })
        .min(8, { message: "Password must be at least 8 characters" }),
});

export const SigninformSchema = z.object({
    email: z
        .string({
            required_error: "email field is required.",
        })
        .email()
        .min(5, { message: "Please enter a valid email address." }),
    password: z
        .string({
            required_error: "password field is required.",
        })
        .min(8, { message: "Password must be at least 8 characters" }),
});

export const ResetPasswordformSchema = z.object({
    token: z.string({
        required_error: "token is required",
    }),
    email: z
        .string({
            required_error: "email field is required.",
        })
        .min(5, { message: "Please enter a valid email address." }),

    password: z
        .string({
            required_error: "password is required",
        })
        .min(8, { message: "Password must be at least 8 characters" }),

    password_confirmation: z
        .string({
            required_error: "password is required",
        })
        .min(8, { message: "Password must be at least 8 characters" }),
});
