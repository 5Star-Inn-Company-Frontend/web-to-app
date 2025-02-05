import { Navbar } from "@/components/Navbar";
import { Simulation } from "@/components/Simulation";
import { useNavigate } from "react-router-dom";

const ViewApp = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="flex justify-between w-[100%]">
                <div className="w-[75%] mx-4 rounded-lg">
                    <div className="my-12">
                        <div className="topp flex items-center justify-center flex-col mb-7">
                            <img src="/access-logo.png" alt="" id="accessLogo" className="rounded-sm mb-2" />
                            <h2 className="text-2xl font-medium leading-7 mb-1">WebhostingApp</h2>
                            <p className="text-[0.625rem] text-primary60">Last saved 12 days ago</p>
                        </div>
                        <div className="flex items-center justify-center gap-x-10">
                            <button
                                className="flex items-center gap-x-5 text-xs bg-black text-white rounded-lg px-5 h-8  w-[14.1875rem]"
                                onClick={() => navigate("/app/overview")}
                            >
                                <i className="fa-solid fa-pen-to-square"></i> Edit App
                            </button>
                            <button className="flex items-center gap-x-5 text-xs bg-primary20 rounded-lg px-5 h-8  w-[14.1875rem]">
                                <img src="/backup-icon.png" alt="" /> Manage App Backups
                            </button>
                            <button className="flex items-center gap-x-5 text-xs bg-primary20 rounded-lg px-5 h-8  w-[14.1875rem]">
                                <i className="fa-solid fa-copy"></i> Cone App on 5star
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-t-lg py-10">
                        <div className="px-14">
                            <Headings title="Overview" />
                            <div className="boxes flex gap-4">
                                <div className="flex gap-4 flex-col w-full">
                                    <OverviewCard title="Website URL" url="https://webhosting.5starcompany.com.ng/" />
                                    <OverviewCard title="Private Management Link" url="https://webhosting.5starcompany.com.ng/" />
                                </div>
                                <div className="flex gap-y-4 flex-col w-full">
                                    <OverviewCard title="Organization " url="https://webhosting.5starcompany.com.ng/" />
                                    <OverviewCard title="Public Sharing Link" url="https://webhosting.5starcompany.com.ng/" />
                                </div>
                            </div>
                        </div>

                        {/* ====================== */}

                        <hr className="my-10 text-primary20" />

                        {/*  */}

                        <div className="px-14">
                            <Headings title="Download your App" />
                            <div className="flex items-center gap-x-10">
                                <DownloadCard img="/apple.svg" type="iOS" />
                                <DownloadCard img="/andriod.svg" type="Andriod" />
                            </div>
                        </div>

                        {/* ====================== */}

                        <hr className="my-10 text-primary20" />

                        {/*  */}

                        <div className="license px-14">
                            <Headings title="License" />
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-y-6">
                                    <LicenseCard />
                                    <LicenseCard />
                                    <LicenseCard />
                                </div>
                                <div className="grid gap-y-6">
                                    <LicenseCard />
                                    <LicenseCard />
                                    <LicenseCard />
                                </div>
                            </div>
                            <div className="flex items-end gap-x-5 mt-14 text-primary60 text-[0.625rem]">
                                <button
                                    className="flex items-center gap-x-5 text-xs bg-black text-white rounded-lg px-5 h-8  w-[14.1875rem]"
                                    onClick={() => navigate("/app/edit/overview")}
                                >
                                    <i className="fa-solid fa-pen-to-square"></i> Edit App
                                </button>
                                <p>Last saved 12 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[30%]">
                    <Simulation />
                </div>
            </div>
        </>
    );
};

export default ViewApp;

const LicenseCard = () => {
    return (
        <div>
            <p className="text-[0.8125rem] leading-4 mb-2">App Development:</p>
            <h6 className="text-[0.8125rem] font-medium">Self-Service</h6>
        </div>
    );
};

interface DownloadCardType {
    type: string;
    img: string;
}

const DownloadCard = ({ img, type }: DownloadCardType) => {
    return (
        <div className="border border-primary20 rounded-lg w-[15rem]">
            <div className="text-xs flex items-center gap-x-2 py-3 px-10">
                <img src={img} alt="" />
                <span className="block mt-1">{type}</span>
            </div>
            <hr />
            <div className="flex items-center justify-center p-3">
                <button className="rounded-lg h-9 w-[13.1875rem] leading-4 bg-deepgray flex gap-x-8 px-3 items-center">
                    <img src="/download.svg" alt="download icon" />
                    <span className="text-xs block">Download {type}</span>
                </button>
            </div>
        </div>
    );
};

interface TitleProps {
    title: string;
}

const Headings = ({ title }: TitleProps) => {
    return <h2 className="font-semibold mb-6">{title}</h2>;
};

interface OverviewCardProps {
    title: string;
    url: string;
}
const OverviewCard = ({ title, url }: OverviewCardProps) => {
    return (
        <div className="p-2 rounded-lg w-full border">
            <h6 className="font-semibold text-xs mb-1">{title}</h6>
            <div className="flex items-center justify-between text-xs underline">
                <a href="#">{url}</a>
                <button className="cursor-pointer">
                    <i className="fa-solid fa-copy"></i>
                </button>
            </div>
        </div>
    );
};
