import { TopNav } from "../global/topnav";
import "./createAppOverview.scss";
import { AppSideNav } from "../customui/app/sidenav";
import { SimulationView } from "../global/simulationview";
import { useState } from "react";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import Dropdown from "../Dropdown";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

export function CreateAppOverview() {
    interface AppInput {
        name: string;
        url: string;
    }
    const navigate = useNavigate();

    const [appInput, setAppInput] = useState<AppInput>({
        name: "",
        url: "",
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function handleChange(e: { target: { name: string; value: string } }) {
        if (e.target.name === "url") {
            const inputUrl = e.target.value;
            setAppInput((prevValue) => ({
                ...prevValue,
                url: inputUrl,
            }));
        } else {
            const inputAppName = e.target.value;
            setAppInput((prevValue) => ({
                ...prevValue,
                name: inputAppName,
            }));
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        // const { url, name } = appInput;
        // Get the token from localStorage
        const savedToken: string | null = localStorage.getItem("authToken");
        e.preventDefault();

        setIsLoading(true);
        //fetch api
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${savedToken}`,
            },
            body: JSON.stringify(appInput),
        };

        try {
            const response = await fetch("https://web2app.prisca.5starcompany.com.ng/api/app", requestOptions);

            //log response error
            if (!response.ok) {
                throw new Error("Unprocessable content!");
            }

            const result = await response.json();
            console.log("Response: ", result);
            //navigate to homepage after successful login
            navigate("/app/:action/link_handling");
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    }
    const options = ["Admin", "Editor", "Viewer"];
    return (
        <div className="createAppOverview">
            <div className="bigContainer">
                <div className="mainContainer">
                    <div className="leftContainer">
                        <div className="center">
                            <form onSubmit={handleSubmit}>
                                <div className="inputs">
                                    <h2>Website URL</h2>
                                    <p>The webpage to display when your app loads.</p>
                                    <input type="url" name="url" placeholder="https://" onChange={handleChange} required />
                                </div>
                                <div className="inputs">
                                    <h2>App Name</h2>
                                    <p>Our App Name is displayed on the device home screen.</p>
                                    <input type="text" name="AppName" placeholder="App Name" onChange={handleChange} required />
                                </div>
                                <div className="inputs mb-10">
                                    <h2>Organization</h2>
                                    <p>The Organization account where this new app will reside.</p>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a fruit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Fruits</SelectLabel>
                                                <SelectItem value="apple">Apple</SelectItem>
                                                <SelectItem value="banana">Banana</SelectItem>
                                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                                <SelectItem value="grapes">Grapes</SelectItem>
                                                <SelectItem value="pineapple">Pineapple</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {isLoading ? (
                                    <Button disabled className="w-full text-white bg-[#24243E] p-[0.5rem]">
                                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin text-white" />
                                        Please wait...
                                    </Button>
                                ) : (
                                    <Button className="w-[13.8125rem]">Start Building your app</Button>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
