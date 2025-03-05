import { Skeleton } from "@/components/ui/skeleton";

export default function TableSkeleton() {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left text-xs uppercase font-medium text-primary40">User</th>
                        <th className="px-4 py-2 text-left text-xs uppercase font-medium text-primary40">Email</th>
                        <th className="px-4 py-2 text-left text-xs uppercase font-medium text-primary40">Role</th>
                        <th className="px-4 py-2 text-left text-xs uppercase font-medium text-primary40">App Access</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Skeleton Placeholder Rows */}
                    {Array(5)
                        .fill(null)
                        .map((_, index) => (
                            <tr key={index} className="mb-2">
                                <td className="px-4 py-4 text-xs flex items-center space-x-4">
                                    <Skeleton className="w-12 h-12 rounded-full" /> {/* Skeleton for initials */}
                                    <Skeleton className="w-24 h-4 rounded" /> {/* Skeleton for full name */}
                                </td>
                                <td className="px-4 py-4 text-xs">
                                    <Skeleton className="w-48 h-4 rounded" /> {/* Skeleton for email */}
                                </td>
                                <td className="px-4 py-4 text-xs">
                                    <Skeleton className="w-24 h-4 rounded" /> {/* Skeleton for role */}
                                </td>
                                <td className="px-4 py-4 text-xs flex justify-between items-center">
                                    <Skeleton className="w-20 h-4 rounded" /> {/* Skeleton for App Access */}
                                    <Skeleton className="w-4 h-4 rounded-full" /> {/* Skeleton for icon */}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
