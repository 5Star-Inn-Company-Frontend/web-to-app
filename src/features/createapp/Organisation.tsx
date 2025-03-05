import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Organisation() {
    return (
        <div className="mb-20">
            <h2 className="text-base font-medium mb-5">Organization</h2>
            <p className="text-primary60 mb-5">The Organization account where this new app will reside.</p>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Select Team" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="emmy">Emmy's Team</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
