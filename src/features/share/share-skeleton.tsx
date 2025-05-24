import { Skeleton } from "@/components/ui/skeleton";

export function ShareSkeleton() {
    return (
        <div className="bg-primary5 px-2 py-8 xl:p-8">
            <div className="flex flex-col items-center justify-center mb-4">
                <Skeleton className="mb-1 w-[70px] h-[70px] rounded-full" />
                <Skeleton className="h-8 w-[120px] mt-2" />
            </div>

            <div className="bg-white rounded-2xl flex flex-col gap-4 w-full mx-auto max-w-[420px] p-4 xl:p-10">
                {/* Tabs Skeleton */}
                <div className="flex gap-4">
                    <Skeleton className="h-10 w-24" />
                    <Skeleton className="h-10 w-32" />
                    <Skeleton className="h-10 w-24" />
                    <Skeleton className="h-10 w-36" />
                </div>

                {/* Toolbar Skeleton */}
                <div className="flex justify-between w-full gap-2">
                    <Skeleton className="h-10 w-[4rem]" />
                    <Skeleton className="h-10 w-10 rounded-md" />
                    <Skeleton className="h-10 w-10 rounded-md" />
                    <Skeleton className="h-10 w-10 rounded-md" />
                    <Skeleton className="h-10 w-10 rounded-md" />
                </div>

                {/* Phone Preview Skeleton */}
                <div className="relative w-full max-w-[320px] mx-auto h-[650px]">
                    <Skeleton className="absolute inset-0 w-full h-full rounded-xl" />
                </div>

                {/* Device Selectors Skeleton */}
                <div className="flex items-center justify-between gap-4">
                    <Skeleton className="h-10 w-[48%]" />
                    <Skeleton className="h-10 w-[48%]" />
                </div>

                {/* Buttons Skeleton */}
                <Skeleton className="h-10 w-[85%] mx-auto" />
                <Skeleton className="h-10 w-[85%] mx-auto" />
                <Skeleton className="h-10 w-[85%] mx-auto mb-8" />
            </div>
        </div>
    );
}
