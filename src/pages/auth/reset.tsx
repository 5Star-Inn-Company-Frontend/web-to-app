import { AuthLayout } from "@/components/auth/layout"
import { ResetPasswordForm } from "@/components/auth/resetpassword"

export const ResetPage =()=>{
    return(
        <AuthLayout
            route="/auth/signup"
            routeText={<h6>Not a Member yet? <span className="underline font-semibold">JOIN NOW</span></h6>}
        >
            <ResetPasswordForm/>
        </AuthLayout>
    )
}