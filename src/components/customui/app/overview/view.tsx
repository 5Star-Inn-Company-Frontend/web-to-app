import Organization from "@/features/overview/Organization";
import PublicSharing from "@/features/overview/PublicSharing";
import PrivateSharing from "@/features/overview/PrivateSharing";
import AppDescription from "@/features/overview/AppDescription";
import AppName from "@/features/overview/AppName";
import WebsiteUrl from "@/features/overview/WebsiteUrl";
import OverviewHeading from "@/features/overview/OverviewHeading";

export const OverviewSection = () => {
    return (
        <>
            <OverviewHeading />
            <WebsiteUrl />
            <AppName />
            <AppDescription />
            <PrivateSharing />
            <PublicSharing />
            <Organization />
        </>
    );
};
