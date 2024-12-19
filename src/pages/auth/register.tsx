import { AuthLayout } from "@/components/auth/layout"
import { SignupForm } from "@/components/auth/register"

export const SignupPage =()=>{
    return(
        <AuthLayout
            route="/auth/signin"
            routeText={<h6>Already a Member? <span className="underline font-semibold">LOG IN NOW</span></h6>}
        >
            <SignupForm/>
        </AuthLayout>
    )
}