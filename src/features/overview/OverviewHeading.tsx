import { Text } from "@/components/global/text";

export default function OverviewHeading() {
    return (
        <div className="py-4 px-8 xl:px-12 xl:py-10 border-b border-primary20 bg-white w-full rounded">
            <Text style="text-2xl xl:text-4xl font-medium xl:mb-4" value="App Overview" />
        </div>
    );
}
