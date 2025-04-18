import { CollapsibleComponent } from "@/components/global/collapsibleComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateUniversalLink } from "@/redux/app/linkHandlingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { debounce } from "lodash";
import { useMemo, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

interface IDomain {
    id: number;
    link: string;
}

export default function UniversalLink() {
    const dispatch = useAppDispatch();
    const universalLinks = useAppSelector(
        (state: RootState) => state.apps.linkHandling.universalLinks
    );

    const linksWithID = useMemo(() => {
        return universalLinks.map((link, index) => {
            return { id: index + 1 + Date.now(), link };
        });
    }, [universalLinks]);

    const [domains, setDomains] = useState(linksWithID || []);
    const handleAddDomain = () => {
        const newDomain = { id: domains.length + 1 + Date.now(), link: "" };
        setDomains([...domains, newDomain]);
    };

    const debouncNewDomain = debounce((domains: IDomain[]) => {
        const domainWithoutID = domains.map((domain: IDomain) => domain.link);
        dispatch(updateUniversalLink(domainWithoutID));
    }, 2000);

    const handleUpdateDomain = (value: string, id: number) => {
        const updatedDomain = domains.map((domain) => {
            if (domain.id === id) {
                return { ...domain, link: value };
            }
            return domain;
        });
        setDomains(updatedDomain);

        debouncNewDomain(updatedDomain);
    };

    const handleDeleteDomain = (id: number) => {
        setDomains(domains.filter((domain) => domain.id !== id));
    };

    return (
        <div className="py-4 xl:px-4 xl:py-8 bg-white border-b border-primary20">
            <CollapsibleComponent
                title="Universal Links /Deep Links "
                subTitle="Deep Links / Universal Links configure your device to open links pointing to your site in emails/text messages/other websites directly in your app rather than in a mobile browser. This provides a richer native app user experience."
            >
                <div className="max-w-lg pl-8 space-y-4">
                    {domains.map((domain) => {
                        return (
                            <div key={domain.id} className="flex items-center space-x-4">
                                <Input
                                    value={domain.link}
                                    className="py-6 block px-4 text-lg"
                                    onChange={(e) => handleUpdateDomain(e.target.value, domain.id)}
                                    placeholder="example.com"
                                />
                                <Button
                                    onClick={() => handleDeleteDomain(domain.id)}
                                    className="bg-transparent text-black hover:bg-slate-100"
                                >
                                    <RiDeleteBin6Line className="text-2xl" />
                                </Button>
                            </div>
                        );
                    })}
                </div>
                <div className="px-8">
                    <Button
                        onClick={handleAddDomain}
                        className="flex items-center gap-2 bg-white border text-black my-4 hover:bg-slate-100"
                    >
                        <AiOutlinePlus size="1.4rem" />
                        Add Domain
                    </Button>
                </div>
            </CollapsibleComponent>
        </div>
    );
}
