import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

interface ICreateAppBtn {
    isPending: boolean;
}
export default function CreateAppBtn({ isPending }: ICreateAppBtn) {
    return (
        <>
            {isPending ? (
                <Button disabled className="py-7 px-8">
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin text-white" />
                    Please wait...
                </Button>
            ) : (
                <Button className="py-7 px-8">Start Building your app</Button>
            )}
        </>
    );
}
