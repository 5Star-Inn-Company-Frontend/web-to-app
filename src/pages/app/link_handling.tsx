import LinkHandlingHeading from "@/features/linkhandling/LinkHandlingHeading";
import LinkBehaviour from "@/features/linkhandling/LinkBehaviour";
import NewWindows from "@/features/linkhandling/NewWindows";
import UniversalLink from "@/features/linkhandling/UniversalLink";
import UniversalLinkUrl from "@/features/linkhandling/UniversalLinkUrl";

export const LinkHandling = () => {
    return (
        <>
            <LinkHandlingHeading />
            <LinkBehaviour />
            <NewWindows />
            <UniversalLink />
            <UniversalLinkUrl />
        </>
    );
};
