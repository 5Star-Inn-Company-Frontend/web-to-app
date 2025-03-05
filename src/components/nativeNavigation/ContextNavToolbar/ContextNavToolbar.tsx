import ContextEnable from "@/features/nativenavigation/contextualNavTab/ContextEnable";
import ToolbarVisibility from "@/features/nativenavigation/contextualNavTab/ToolbarVisibility";
import BackButtonConfig from "@/features/nativenavigation/contextualNavTab/BackButtonConfig";
import RefreshButtonConfig from "@/features/nativenavigation/contextualNavTab/RefreshButtonConfig";
import ForwardButtonConfig from "@/features/nativenavigation/contextualNavTab/ForwardButtonConfig";

export function ContextNavToolbar() {
    return (
        <>
            <ContextEnable />
            <ToolbarVisibility />
            <BackButtonConfig />
            <RefreshButtonConfig />
            <ForwardButtonConfig />
        </>
    );
}
