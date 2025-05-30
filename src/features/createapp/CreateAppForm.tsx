import { useNavigate } from "react-router-dom";
import AppNameInput from "./AppNameInput";
import AppUrl from "./AppUrl";
import CreateAppBtn from "./CreateAppBtn";
import Organisation from "./Organisation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { createApp } from "@/api/app";
import { IAppDataResponse, IAppResponse } from "@/types/type";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";

interface IAppInput {
    name: string;
    url: string;
    org: string;
}

export default function CreateAppForm() {
    //

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [appInput, setAppInput] = useState<IAppInput>({ name: "", url: "", org: "Emmy's Team" });

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setAppInput((prev) => ({ ...prev, [name]: value }));
    }

    const { isPending, mutate } = useMutation({
        mutationFn: createApp,
        onSuccess: (data: IAppDataResponse) => {
            queryClient.setQueryData(["apps"], (apps: IAppResponse) => apps.data.push(data.data));
            setAppInput({ name: "", url: "", org: "" });
            toast.success("App Created Successfully", {
                position: "top-right",
            });
            console.log(data);
            navigate(`/app/${data.data.id}/overview`);
        },
        onError: (error: Error | AxiosError) => {
            if (axios.isAxiosError(error)) {
                toast.error(error?.response?.data.message, {
                    position: "top-center",
                });
            }
        },
    });

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        mutate(appInput);
    }

    return (
        <div className="max-w-[800px] px-2 xl:p-16 rounded-lg my-10 mx-auto bg-white">
            <form className="pb-20" onSubmit={handleSubmit}>
                <AppUrl handleChange={handleChange} value={appInput.url} />
                <AppNameInput handleChange={handleChange} value={appInput.name} />
                <Organisation />
                <CreateAppBtn isPending={isPending} />
            </form>
        </div>
    );
}
