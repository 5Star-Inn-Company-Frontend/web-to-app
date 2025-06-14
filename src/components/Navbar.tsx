import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import Initials from "@/utils/initials";
import { useNavigate } from "react-router-dom";

export function Navbar() {
    const navigate = useNavigate();
    const user = useAppSelector((state: RootState) => state.auth.user);

    return (
        <div className="bg-black w-full flex justify-between items-center px-2 py-3 xl:px-[3.125rem]">
            <div className="w-[70px] xl:w-[100px] cursor-pointer">
                <img src="/logo.png" alt="" className="logo" onClick={() => navigate("/")} />
            </div>

            <div className="flex gap-[0.5rem] items-center bg-[grey] p-2 rounded-md">
                <span>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    {/* <Avatar name="Hamzat lawal" size={"150"} round={true}/> */}
                                    {user?.name && <Initials name={user?.name} />}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="w-[5rem]">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="text-large flex w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md"
                                                    href="#"
                                                    onClick={() => navigate("/auth/signin")}
                                                >
                                                    Log Out
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </span>
            </div>
        </div>
    );
}
