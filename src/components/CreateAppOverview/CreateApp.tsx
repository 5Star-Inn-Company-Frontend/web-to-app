import { useState } from "react";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function CreateApp() {
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

    return (
        <div className="py-20 px-14">
            <form onSubmit={handleSubmit}>
                <div className="mb-10">
                    <h2 className="text-base font-medium mb-5">Website URL</h2>
                    <p className="text-primary60 mb-2">The webpage to display when your app loads.</p>
                    <input
                        type="url"
                        name="url"
                        className="border border-primary60 w-full rounded-sm px-5 py-2"
                        placeholder="https://"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-10">
                    <h2 className="text-base font-medium mb-5">App Name</h2>
                    <p className="text-primary60 mb-2">Our App Name is displayed on the device home screen.</p>
                    <input
                        type="text"
                        name="AppName"
                        placeholder="App Name"
                        className="border border-primary60 w-full rounded-sm px-5 py-2"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-20">
                    <h2 className="text-base font-medium mb-5">Organization</h2>
                    <p className="text-primary60 mb-2">The Organization account where this new app will reside.</p>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Team" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="emmy">Emmy's Team</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {isLoading ? (
                    <Button disabled className="w-full text-white bg-[#24243E] p-[0.5rem]">
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin text-white" />
                        Please wait...
                    </Button>
                ) : (
                    <Button className="py-7 px-8">Start Building your app</Button>
                )}
            </form>
        </div>
    );
}
