import { Text } from "@/components/global/text"
import { useNavigate } from "react-router-dom"

interface AuthPromptProps {
    action: "signin" | "signup" | "reset"
}

const Authprompt = ({ action }: AuthPromptProps) => {
    const navigate = useNavigate()

    const handleNavigation = () => {
        switch (action) {
            case "signin":
                navigate("/auth/signup")
                break
            case "signup":
                navigate("/auth/signin")
                break
            case "reset":
                navigate("/auth/signin")
                break
            default:
                break
        }
    }

    return (

        <div className="flex gap-x-2 mt-5 font-lato ">
            {action === "signin" && (
                <>
                    <Text value="i don't have an account" style="text-primary10 text-sm" />
                    <Text value="Sign Up" style="font-bold text-sm cursor-pointer" clickFunc={handleNavigation} />
                </>
            )}
            {action === "signup" && (
                <>
                    <Text value="Already have an account?" style="text-primary10 text-sm" />
                    <Text value="Login" style="font-bold text-sm cursor-pointer" clickFunc={handleNavigation} />
                </>
            )}
            {action === "reset" && (
                <>
                    <Text value="Remember details?" style="text-primary10 text-sm" />
                    <Text value="Login" style="font-bold text-sm cursor-pointer" clickFunc={handleNavigation} />
                </>
            )}

            

        </div>
    )
}

export default Authprompt